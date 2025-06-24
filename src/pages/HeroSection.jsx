import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white px-4"
      style={{ backgroundImage: "url('/bg-rocket-academy.jpg')" }} // replace this with your local path
    >
      {/* Top Right Apply Now */}
      <div className="absolute top-6 right-6 z-10">
        <button className="bg-orange-500 hover:bg-orange-600 transition text-sm font-semibold px-5 py-2 rounded-md shadow">
          Apply now
        </button>
      </div>

      <div className="text-center max-w-4xl z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight font-sans">
          From Theory to Therapy–
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2">
          <span className="bg-gradient-to-r from-orange-500 to-orange-300 text-transparent bg-clip-text italic font-serif">
            Skill Building
          </span>{' '}
          <span className="text-white font-sans">Courses</span>
        </h2>

        <p className="mt-6 text-sm sm:text-base text-gray-200">
          Transform academic knowledge into practical skills with expert-led courses, hands-on
          experience, and mentorship—designed to prepare you for success as a professional psychologist.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 transition font-semibold px-6 py-2 rounded">
            Apply now
          </button>
          <p className="text-green-400 text-sm font-medium">
            🟢 C5 is ongoing. Enrollment for C6 is live.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
         <div className="w-[280px] rounded-xl px-6 py-4 text-left bg-gradient-to-br from-[#1e1a18] to-[#0f0d0d] border border-orange-500">
          <p className="text-orange-400 text-sm">Next Cohort</p>
          <p className="text-white text-lg font-semibold mt-1">28th July, 2025</p>
        </div>

        <div className="w-[280px] rounded-xl px-6 py-4 text-left bg-gradient-to-br from-[#1e1a18] to-[#0f0d0d] border border-orange-500">
          <p className="text-orange-400 text-sm">Enrollment</p>
          <p className="text-white text-lg font-semibold mt-1">Live now</p>
        </div>

        </div>
      </div>

      {/* Bottom Right Badge */}
      <div className="absolute bottom-6 right-6 z-10">
        <button className="bg-orange-500 hover:bg-orange-600 transition text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full shadow">
          Powered by <span className="font-bold">Rocket Health 🚀</span>
        </button>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
    </section>
  );
};

export default HeroSection;
