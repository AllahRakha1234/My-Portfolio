// IMPORTING FRAMER-MOTION
import { motion } from "framer-motion";
// IMPORTING VARIANTS
import { fadeIn } from "../variants";
// IMPORTING COMPONENTS
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";

// REACT
import Image from "next/image";

// HOME FUNCTION
const Home = () => {
  // REDNER
  return (
    // <div className="bg-primary/60 h-[85vh] xl:h-[100vh]">
    <div className="bg-primary/60 h-screen">
      {/* TEXT */}
      <div className="w-full h-full bg-gradient-to-r from-primary/30 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-20 xl:text-left h-full container mx-auto">
          {/* TITLE */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="-mt-48 xl:mt-0 text-2xl md:text-3xl font-bold leading-[1.3] xl:text-[2.7rem] xl:leading-[1.3] z-30"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          {/* SUBTITLE */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="z-30 max-w-sm md:max-w-lg text-md md:text-xl xl:max-w-xl mx-auto xl:mx-0 mt-2 md:mt-5 mb-10 xl:mb-6"
          >
            I&apos;m a BSCS student at National University of Sciences &
            Technology<span className="text-accent font-semibold"> (NUST)</span>
            , Islamabad, currently on an exciting journey of exploration and
            growth.
          </motion.p>
          {/* BUTTON */}
          {/* <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex -mt-8 xl:mt-0 justify-center xl:hidden relative"
          >
            <ProjectsBtn />
          </motion.div> */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            id="homePageAvatarForSmallScreen"
            className="z-30 w-full h-full max-h-[766px] max-w-[260px] md:max-w-[320px] absolute right-[24%] sm:right-[28%] md:right-[32%] lg:right-[35%]
             -bottom-[50%]"
          >
            <div className="xl:hidden xl:max-w-none">
              <Image
                src="/ar.png"
                height={678}
                width={737}
                className="translate-z-0 w-full h-full rotate-90"
                alt="Avatar Image"
              />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* IMAGE */}
      <div className="w-[800px] h-full absolute right-10 bottom-0">
        {/* BG-IMAGE */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-no-repeat xl:bg-right w-full h-full absolute mix-blend-color-dodge translate-z-0 "></div>
        {/* PARTICLES */}
        <ParticlesContainer />
        {/* AVATAR */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          // className="w-full h-full max-h-[1266px] max-w-[1330px] absolute rotate-12 bottom-56 lg:-right-[10%]"
          className="w-full h-full max-h-[766px] max-w-[320px] absolute -bottom-[42%] lg:right-[15%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
