// IMPORTING COMPONENTS
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
// FRAMER-MOTION
import { motion } from "framer-motion";
// VARIANTS
import { fadeIn } from "../../variants";
// SERVICES FUNCTION
const Services = () => {
  return (
    <div className="h-full md:mt-4 lg:mt-0 bg-primary/30 flex items-center py-36 sm:py-28 md:py-24 xl:py-36 xl:mr-2">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-12">
          {/* TEXT */}
          <div className="text-center flex flex-col xl:w-[30vw] lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My Services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[500px] lg:max-w-[400px] mx-auto lg:mx-0"
            >
              With over 2 years of freelancing experience, I specialize in{" "}
              <span className="text-accent font-semibold">
                full stack web development
              </span>{" "}
              using the MERN stack. My services include building dynamic
              websites, developing responsive user interfaces, games, and creating
              robust back-end systems. I am proficient in technologies like{" "}
              <span className="text-accent font-semibold">
                NodeJS, React, MongoDB, and more.
              </span>{" "}
            </motion.p>
          </div>
          {/* SLIDER */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
