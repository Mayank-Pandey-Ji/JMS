// /pages/HeroPage.jsx

const HeroPage = () => {
  return (
    <section id="hero">
      <div className="w-full relative h-[100vh]">
        <img
          src="/hero_bg.png"
          alt="Hero Background"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute top-0 left-0 right-0 h-full flex flex-col items-center justify-center px-6 sm:px-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight tracking-tighter text-white max-w-3xl">
            From Theory to Therapy –{" "}
            <span className="bg-gradient-to-r from-[#F7AC8D] to-[#E26836] bg-clip-text text-transparent italic">
              Skill Building
            </span>{" "}
            Courses
          </h1>
          <h2 className="text-white font-semibold py-6 tracking-wider max-w-3xl text-base sm:text-lg">
            Transform academic knowledge into practical skills with expert-led
            courses, hands-on experience, and mentorship—designed to prepare you
            for success as a professional psychologist.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 items-center text-white">
            <button className="bg-[#DA4E15] hover:bg-[#C94813] rounded-lg py-2 px-6 sm:px-8">
              Apply now
            </button>
            <span className="text-sm sm:text-base font-semibold px-6 w-xs text-center">
              🟢 C5 is ongoing. Enrollment for C6 is live.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroPage
