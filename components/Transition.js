// IMPORTING FRAMER-MOTION
import { motion, AnimatePresence } from "framer-motion";

// VARIANTS
const transtionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

// TRANSITION FUNCTION
const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 h-screen w-full right-full z-30 bg-[#2e2257]"
        variants={transtionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 h-screen w-full right-full z-20 bg-[#3b2d71]"
        variants={transtionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.3, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 h-screen w-full right-full z-10 bg-[#4b3792]"
        variants={transtionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.3, duration: 0.3, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
};

export default Transition;
