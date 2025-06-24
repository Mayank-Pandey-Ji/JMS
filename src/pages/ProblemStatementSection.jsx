import React from 'react';
import { useInView } from 'react-intersection-observer';

const ProblemStatementSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <section className="min-h-screen bg-black text-white px-6 py-16">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
        {/* Left Gradient Background */}
        <div className="w-full md:w-1/2 relative mb-12 md:mb-0">
          <div className="absolute inset-0 bg-gradient-radial from-orange-700 via-orange-800/60 to-black"></div>
        </div>

        {/* Right Content */}
        <div
          ref={ref}
          className={`w-full md:w-1/2 z-10 transition-opacity duration-1000 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-6">
            After reviewing over 20,000 + applications while hiring at Rocket Health, we found a big problem:{' '}
            <span className="text-orange-500 font-bold">
              college equips students with theory, but fails to prepare them for real-world practice.
            </span>
          </h2>

          <p className="text-lg text-white/90 mb-6 font-serif">
            This issue repeatedly came up in our interviews with thousands of psychologists, where we often had
            to tell candidates to gain practical experience before reapplying.
          </p>

          <p className="text-lg text-white/90 mb-6 font-serif">
            Many young psychologists shared that it’s a chicken-and-egg problem—companies require experience, but
            there’s no clear path to gain it.
          </p>

          <p className="text-lg font-serif">
            <span className="text-orange-500 font-semibold">
              This is why we created Rocket Academy: a training ground
            </span>{' '}
            <span className="text-orange-800 font-medium">
              where young psychologists evolve into skilled, confident professionals ready to face real-world
              practice.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatementSection;
