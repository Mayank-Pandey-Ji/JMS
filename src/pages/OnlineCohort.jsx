// /pages/OnlineCohort.jsx

import React, { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = []
const IMAGES_PER_SLIDE = 3

const OnlineCohort = () => {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(images.length / IMAGES_PER_SLIDE)

  const nextPage = () => setPage((prev) => (prev + 1) % totalPages)
  const prevPage = () => setPage((prev) => (prev - 1 + totalPages) % totalPages)

  const visibleImages = images.slice(
    page * IMAGES_PER_SLIDE,
    page * IMAGES_PER_SLIDE + IMAGES_PER_SLIDE
  )
  return (
    <>
      <section id="cohort" className="bg-black">
        <div className="w-full text-white py-10 flex flex-col items-center justify-center text-center gap-y-10">
          <span className="font-semibold">6 WEEK ONLINE PROGRAM</span>
          <span className="font-bold text-4xl max-w-sm">
            Master the <a className="text-[#E7794C]">A&rarr;Z</a> of Practical
            Psychology
          </span>
          <span className="w-xl">
            We&#39;ll help you evolve from a young psychologist to a confident,
            skilled professional, equipping you with hands-on experience,
            real-world techniques, and the confidence to excel in therapy.
          </span>
        </div>
        <div className="w-full flex items-center justify-center p-2">
          <img
            src="/ggl_meet_cohort.png"
            alt="googlemeet"
            width={700}
            height={700}
          />
        </div>
        <div className="flex flex-col w-full items-center justify-center py-5">
          <button className="bg-[#F25C1F] p-3 rounded-lg text-white font-semibold">
            Apply now
          </button>
          <span className="text-white font-semibold py-5">
            COHORT STARTS ON JULY 28
          </span>
        </div>
      </section>
      <section id="everything-you-need" className="bg-black">
        <div className="flex flex-col sm:flex-row w-full items-center px-15 py-30">
          <div className="flex flex-col w-3xl gap-y-12">
            <span className="font-bold text-5xl text-white">
              Everything You Need to Succeed as a Psychologist
            </span>
            <span className="text-white font-bold text-2xl">
              Expert-Led Sessions
            </span>
            <span className="text-gray-200/50 font-bold text-2xl">
              Structured Training programs
            </span>
            <span className="text-gray-200/50 font-bold text-2xl">
              Community and Mentorship
            </span>
            <span className="text-gray-200/50 font-bold text-2xl">
              Certification and Beyond
            </span>
          </div>
          <div>
            <img
              src="/ggl_meet_2.png"
              alt="googlemeet"
              width={600}
              height={600}
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>
      <section id="mentors">
        <div className="w-full max-w-4xl mx-auto py-8">
          <div className="relative overflow-hidden">
            <button
              onClick={prevPage}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
            >
              <ChevronLeft />
            </button>

            <div className="flex gap-4 justify-center">
              <AnimatePresence mode="wait">
                {visibleImages.map((src, idx) => (
                  <motion.img
                    key={src}
                    src={src}
                    alt={`Slide ${idx}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-lg shadow-md w-full h-auto max-w-[300px]"
                  />
                ))}
              </AnimatePresence>
            </div>

            <button
              onClick={nextPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-3 h-3 rounded-full ${
                  i === page ? "bg-black" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCohort
