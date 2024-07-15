// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaExpress,
  FaPhp,
  FaPython,
  FaBootstrap,
  FaGithub,
  FaGit,
  FaJava
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiExpress,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiMui,
  SiFlutter
} from "react-icons/si";



import { TbBrandCpp } from "react-icons/tb";

// REACT
import { useState } from "react";
// COUNTER
import CountUp from "react-countup";
// IMPORTING COMPONENT
import Circles from "../../components/Circles";
import Avatar from "../../components/Avatar";

// IMPORTING MOTION
import { motion } from "framer-motion";
// IMPORTING VARIANTS
import { fadeIn } from "../../variants";
//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        // title: "Web Development",
        title: "",
        icons: [
          < FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <FaNodeJs key="nodejs" />,
          <SiNextdotjs key="nextjs" />,
          <SiExpress key="express" />,
          <SiMysql key="mysql" />,
          <SiMongodb key="mongodb" />,
        ],
      },
      {
        // title: "Libraries & Frameworks",
        title: "",
        icons: [
          <FaBootstrap key="bootstrap" />,
          <SiTailwindcss key="tailwindcss" />,
          <SiMui key="mui" />,
          <FaGit key="git"/>,
          <FaGithub key="github" />,
        ],
      },
      {
        // title: "Other Languages",
        title: "",
        icons: [
          <SiPhp key="php" />,
          <FaPython key="python" />,
          <TbBrandCpp key="cpp" />,
          <FaJava key="java"/>,
          <SiFlutter key="flutter"/>
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Intern @ Info Aidtech",
        stage: "Aug 2023 – Sept 2023",
      },
      {
        title: "Intern @ Oasis Infobyte",
        stage: "Oct 2023 – Nov 2023",
      },
      {
        title: "Deputy Director Web & IT @ NUST Robotics Club",
        stage: "2023 – 2024",
      },
    ],
  },
  // {
  //   title: "awards",
  //   info: [
  //     {
  //       title: "Intern @ Info Aidtech",
  //       stage: "Aug 2023 – Sept 2023",
  //     },
  //     {
  //       title: "Intern @ Oasis Infobyte",
  //       stage: "Oct 2023 – Nov 2023",
  //     },
  //   ],
  // },
  {
    title: "credentials",
    info: [
      {
        title: "BS Computer Science @ NUST",
        stage: "2021 – 2025",
      },
      {
        title: "Pre-Engineering @ PGC, Hasilpur",
        stage: "2019 – 2021",
      },
    ],
  },
];

// ABOUT FUNCTION
const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-28 sm:py-32 text-center xl:text-left">
      <Circles />
      {/* AVATAR */}
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="hidden xl:flex max-h-[766px] max-w-[320px] absolute bottom-0 -left-[100px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 ">
        {/* TEXT */}
        <div className="flex-1 flex flex-col justify-center lg:ml-8">
          <motion.h2
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 max-w-[500px] text-2xl sm:text-3xl md:text-4xl mb-4 xl:mb-8 mx-auto xl:mx-0 font-semibold"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[450px] xl:max-w-[400px] text-sm sm:text-lg mx-auto xl:mx-0 mb-3 xl:mb-12 px-6 xl:px-0"
          >
            2 years ago, I began{" "}
            <sapn className="text-accent font-semibold">freelancing</sapn> as a
            developer. Since then I have done remote work for different clients,
            and collaborated on{" "}
            <sapn className="text-accent font-semibold">digital products</sapn>{" "}
            for consumer use.
          </motion.p>
          {/* COUNTERS */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-row flex-1 xl:gap-x-6 xl:max-w-[30vw] my-1 md:my-3 xl:my-0"
          >
            {/* EXPERIENCES */}
            <div
              className="relative flex-1 after:h-full after:w-[1px] after:bg-white/10 after:absolute
              after:right-0 after:bottom-0"
            >
              <div className="text-lg md:text-2xl xl:text-4xl text-accent font-extralight mb-1 md:mb-2">
                <CountUp start={0} end={2} delay={2} duration={5} />+
              </div>
              <div className="text-xs mx-auto lg:mx-0 max-w-[100px] uppercase tracking-[1px] leading-[1.2] md:leading-[1.4]">
                Years of experience
              </div>
            </div>
            {/* CLIENTS */}
            <div
              className="relative flex-1 after:h-full after:w-[1px] after:bg-white/10 after:absolute
              after:right-0 after:bottom-0"
            >
              <div className="text-lg md:text-2xl xl:text-4xl text-accent font-extralight mb-1 md:mb-2">
                <CountUp start={0} end={10} delay={2} duration={5} />+
              </div>
              <div className="text-xs mx-auto lg:mx-0 max-w-[100px] uppercase tracking-[1px] leading-[1.2] md:leading-[1.4]">
                Satisfied Clients
              </div>
            </div>
            {/* PROJECTS */}
            <div
              className="relative flex-1 after:h-full after:w-[1px] after:bg-white/10 after:absolute
              after:right-0 after:bottom-0"
            >
              <div className="text-lg md:text-2xl xl:text-4xl text-accent font-extralight mb-1 md:mb-2">
                <CountUp start={0} end={20} delay={2} duration={5} />+
              </div>
              <div className="text-xs mx-auto lg:mx-0 max-w-[100px] uppercase tracking-[1px] leading-[1.2] md:leading-[1.4]">
                Finished Projects
              </div>
            </div>
          </motion.div>
        </div>
        {/* ABOUT */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[380px]"
        >
          <div className="flex gap-x-2 md:gap-x-4 xl:gap-x-8 my-2 md:mb-4 mx-auto xl:mx-0 ">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex} // Add key prop here
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:transition-all after:duration-300"
                  } cursor-pointer capitalize text-sm sm:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:left-0 after:-bottom-1`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          {/* INFO */}
          <div className="py-4 xl:py-6 flex flex-col gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex} // Add key prop here
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* TITLE */}
                  <div className="font-light mb-1 md:mb-0">{item.title}</div>
                  <div className="hidden xl:flex">-</div>
                  {/* STAGE/YEAR */}
                  <div className="mb-3 md:mb-0">{item.stage}</div>
                  {/* ICONS */}
                  <div className="flex flex-row gap-x-2">
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div
                          key={iconIndex} // Add key prop here
                          className="text-xl md:text-2xl text-white"
                        >
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
