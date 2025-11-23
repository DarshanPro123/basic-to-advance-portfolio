import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import person from "../../assets/images/person1.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "1 Y.",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "10+",
  },
  {
    id: 3,
    title: "Happy Clients",
    description: "10+",
  },
];

const Introduction = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Darshan Panchal";
  const typingSpeed = 150; // milliseconds per character

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Animation variants for text content
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for stats
  const statsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <motion.div
          className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500"
          variants={textVariants}
        >
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I'm
            <span className="text-nowrap shrink-0 inline-block w-full">
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block ml-1"
              >
                |
              </motion.span>
            </span>
          </p>
          <motion.p
            className="text-xs xxs:text-lg lg:text-[18px] my-6"
            variants={textVariants}
          >
            I'm a <span className="bg-highlight">Software Engineer</span>{" "}
            and <span className="bg-highlight">Web Developer</span> based in
            <span className="bg-highlight"> Ahmedabad, Gujarat</span>. I strive to build immersive and beautiful web
            applications through carefully crafted code and user-centric design, and also Created some interesting projects.
          </motion.p>
          <motion.p
            className="text-center lg:text-start"
            variants={textVariants}
          >
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:darshanpro187@gmail.com"
            >
              Say Hello!
            </a>
          </motion.p>
        </motion.div>
        <motion.div
          className="mx-auto lg:mx-0 relative"
          variants={statsVariants}
        >
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                <InformationSummary item={item} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
        variants={imageVariants}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </motion.div>
    </motion.div>
  );
};

export default Introduction;

