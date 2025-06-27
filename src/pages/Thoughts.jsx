// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const Thoughts = () => {
  const content = [
    [
      `After reviewing over 20,000+ applications while hiring at Rocket Health, we found a big problem:`,
      `college equips students with theory, but fails to prepare them for real-world practice.`,
      true,
    ],
    [
      `This issue repeatedly came up in our interviews with thousands of psychologists, where we often had to tell candidates to gain practical experience before reapplying.`,
    ],
    [
      `Many young psychologists shared that it’s a chicken-and-egg problem—companies require experience, but there’s no clear path to gain it.`,
    ],
    [
      `Despite the surge in demand for mental health professionals, the divide between academic learning and practical application continues to grow.`,
    ],
    [
      `Many have the potential to become exceptional psychologists but need to refine their skills and build confidence before working with clients. Young psychologists excel in theory but need real-world experience.`,
    ],
    [
      `The industry needed more than just talent—it needed prepared, high-quality professionals ready to tackle the complexities of the field.`,
    ],
    [
      `This is why we created Rocket Academy:`,
      `a training ground where young psychologists evolve into skilled, confident professionals ready to face real-world practice.`,
      true,
    ],
  ]

  const lineContainer = {
    hidden: {},
    visible: (i) => ({
      transition: {
        delayChildren: i * 0.5,
        staggerChildren: 0.06, // typewriter word by word
      },
    }),
  }

  const wordFade = {
    hidden: { opacity: 0.2 },
    visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  }

  return (
    <section id="thoughts">
      <div className="relative text-white bg-black -z-20 px-6 py-24 gap-y-6 flex flex-col">
        <img
          src="/gradient_bg.avif"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-40"
        />

        {content.map(([line1, line2, highlight], index) => {
          const words = (line1 + (line2 ? " " + line2 : "")).split(" ")
          const isHighlighted = (i) => highlight && i >= line1.split(" ").length

          return (
            <motion.div
              key={index}
              className={`flex flex-wrap text-2xl sm:text-3xl md:text-4xl px-2 sm:px-5 md:px-35 leading-relaxed ${
                highlight ? "font-semibold font-sans" : "font-serif"
              }`}
              variants={lineContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              custom={index}
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  className={`inline-block mr-2 ${
                    isHighlighted(i) ? "text-[#DA4E15]" : ""
                  }`}
                  variants={wordFade}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Thoughts
