import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    rating: 5,
    quote: 'The training program was packed with relatable stories and practical examples that made technical concepts come alive. It demystified the therapist’s role, emphasizing being authentic and approachable. Techniques like grounding exercises and structured case formulations were game-changers. Inclusivity and adaptability stood out, and personalized feedback sessions boosted my confidence. This experience has made therapy sessions feel less intimidating and more impactful.',
    name: 'Sampurna Nag',
    role: 'Counselling Psychologist',
    image: '../assets/Sampurna Nag.png',
    highlights: [
      'relatable stories',
      'practical examples',
      'structured case formulations'
    ]
  },
  {
    rating: 5,
    quote: 'The sessions were incredibly engaging, with diverse perspectives from the trainers. Case discussions and mock therapy sessions were invaluable, preparing me for real-world practice. Tackling real therapy concerns like managing overabundant speech was a highlight. Overall, the training was challenging, inspiring, and rewarding—a perfect launchpad for a fresher like me.',
    name: 'Celina Daniel',
    role: 'Counselling Psychologist',
    image: '../assets/Celina Daniel.png',
    highlights: [
      'real-world practice',
      'perfect launchpad'
    ]
  },
  {
    rating: 5,
    quote: 'The training was highly beneficial and insightful. It was very insightful with lots of learnings and understanding. Overall, it was an enriching experience that has equipped me with the skills and confidence to excel in my career as a psychologist.',
    name: 'Angelina Johnson',
    role: 'Counselling Psychologist',
    image: '../assets/Celina Daniel.png',
    highlights: [
      'highly beneficial',
      'very insightful'
    ]
  }
  // ...other testimonials
];

function highlightText(text, highlights) {
  if (!highlights || highlights.length === 0) return text;
  let result = text;
  highlights.forEach((phrase) => {
    const regex = new RegExp(`(${phrase})`, 'gi');
    result = result.replace(
      regex,
      '<span class="bg-orange-500/30 px-1 rounded text-orange-200 font-medium">$1</span>'
    );
  });
  return result;
}

const TestimonialCarousel = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Hear from our members</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          className="testimonialSwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-gradient-to-br from-[#232526] to-[#414345] rounded-2xl p-1 shadow-lg max-w-2xl mx-auto">
                <div className="bg-black rounded-2xl p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-2xl ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-700'}`}>★</span>
                    ))}
                  </div>
                  <p
                    className="text-gray-100 italic mb-6 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: highlightText(testimonial.quote, testimonial.highlights),
                    }}
                  />
                  <div className="flex items-center mt-4">
                    <div className="w-12 h-12 rounded-full bg-gray-700 mr-4 overflow-hidden border-2 border-orange-400">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
