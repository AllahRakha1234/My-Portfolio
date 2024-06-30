// IMPORTING FRAMER-MOTION
import { motion } from "framer-motion";

// ICON
import { HiArrowRight } from "react-icons/hi2";

// NEXT LINK
import Link from "next/link";
import Image from "next/image";
// PROJECTSBTN FUNCTION
const ProjectsBtn = () => {
  return (
    <div>
      <Link
        href={"/work"}
        className="relative h-[154px] w-[154px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src="/rounded-text.png"
          height={118}
          width={111}
          alt="project-btn"
          className="animate-spin-slow duration-300 w-full h-full max-h-[118px] max-w-[111px]"
        ></Image>
        <HiArrowRight className="absolute text-3xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
