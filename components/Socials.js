// NEXT LINK
import Link from "next/link";
// IMPORTING FRAMER-MOTION
import { motion } from "framer-motion";
// REACT ICONS
import {
  RiWhatsappLine,
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiGithubLine,
  // RiTelegramLine,
} from "react-icons/ri";
// import { SiFiverr } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { FiDownload } from "react-icons/fi";

// SOCIAL FUNCTION
const Socials = () => {
  // HANDLE RESUME DOWNLOAD FUNCTION
  const handleDownload = () => {
    const resumeUrl = "/resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <>
      <motion.div
        initial={{ z: 500, scale: 0 }}
        animate={{ z: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.5, ease: "easeInOut" }}
        className="flex flex-row gap-x-5 text-lg md:text-xl xl:text-3xl"
      >
        <Link
          href={"https://wa.me/923053442386"}
          className="hover:text-accent transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiWhatsappLine />
        </Link>
        <Link
          href={"https://www.instagram.com/allahrakhahsp.786/"}
          className="hover:text-accent transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiInstagramLine />
        </Link>
        <Link
          href={"https://www.facebook.com/rakha.zaidi.1"}
          className="hover:text-accent transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiFacebookLine />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/allah-rakha-399831253/"}
          className="hover:text-accent transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiLinkedinLine />
        </Link>
        <Link
          href={"https://github.com/AllahRakha1234"}
          className="hover:text-accent transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiGithubLine />
        </Link>
        <Link
          href={"https://www.fiverr.com/arz_developer?public_mode=true"}
          className="hover:text-accent transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <RiTelegramLine /> */}
          {/* <SiFiverr /> */}
          <TbBrandFiverr />
        </Link>
      </motion.div>
      <motion.div
        initial={{ z: 500, scale: 0 }}
        animate={{ z: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.5, ease: "easeInOut" }}
        className="md:mt-1"
      >
        <button
          onClick={handleDownload}
          className="text-white rounded-full hover:text-accent transition-all duration-300 
            flex items-center"
        >
          <FiDownload className="mr-1 mb-1 text-2xl" />{" "}
          <span className="text-xl">Resume</span>
        </button>
      </motion.div>
    </>
  );
};

export default Socials;
