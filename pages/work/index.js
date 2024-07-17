// IMPORTING COMPONENTS
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
// FRAMER-MOTION
import { motion } from "framer-motion";
// VARIANTS
import { fadeIn } from "../../variants";
// SERVICES FUNCTION
const Work = () => {
  return (
    <div className="h-full bg-primary/30 flex items-center md:mt-2 lg:mt-0 py-28 sm:py-24 md:py-28 xl:py-32 xl:mr-2">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-12">
          {/* TEXT */}
          <div className="text-center flex flex-col xl:w-[30vw] lg:text-left mb-2 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 mb-0 md:mb-2 xl:mt-8"
            >
              My Work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-2 max-w-[500px] lg:max-w-[400px] mx-auto lg:mx-0"
            >
              I have created a variety of{" "}
              <span className="text-accent font-semibold">
                innovative projects
              </span>{" "}
              that showcase my skills in web development, design, and content
              creation. My portfolio features{" "}
              <span className="text-accent font-semibold">
                dynamic web applications
              </span>{" "}
              and intuitive user interfaces, reflecting my passion for{" "}
              <span className="text-accent font-semibold">
                excellence and creativity
              </span>
              . Explore my work to see how I can bring your vision to life.
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
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
