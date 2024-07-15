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
    <div className="h-full bg-primary/30 flex items-center mt-8  md:mt-2 lg:mt-0 py-28 sm:py-24 md:py-28 xl:py-32 xl:mr-2">
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
              My Work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[500px] lg:max-w-[400px] mx-auto lg:mx-0"
            >
              Over the past few years, I have crafted an array of{" "}
              <span className="text-accent font-semibold">
                {" "}
                innovative projects{" "}
              </span>{" "}
              that highlight my expertise in web development, design, and
              content creation. From crafting{" "}
              <span className="text-accent font-semibold">
                dynamic web applications
              </span>{" "}
              to designing intuitive user interfaces, my portfolio embodies my
              passion for{" "}
              <span className="text-accent font-semibold">
                {" "}
                excellence and creativity.{" "}
              </span>{" "}
              Dive into my work and discover how I can transform your vision
              into reality.
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
