// COMPONENT
import TestimonialSlider from "../../components/TestimonialSlider";

// FRMAER-MOTION
import { motion } from "framer-motion";
// VARIANTS
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-36 lg:py-32 text-center xl:mr-10">
      <div className="container h-full flex flex-col justify-center mx-auto">
        {/* TITLE */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="md:h2 text-[25px] mb-2 sm:mb-8 xl:mb-0"
        >
          What clients <span className="text-accent">says.</span>
        </motion.h2>
        {/* SLIDER */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
