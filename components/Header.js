// NEXT
import Link from "next/link";
// FRAMER-MOTION
import { motion } from "framer-motion";
// IMPORTING COMPONENT
import Socials from "../components/Socials";
// HEADER FUNCTION
const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 py-4 px-8 md:px-24">
          {/* NAME */}
          <Link href={"/"} className="cursor-pointer">
            <motion.h1
              initial={{ z: 500, scale: 0 }}
              animate={{ z: 0, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.5, ease: "easeInOut" }}
              className="lg sm:text-xl md:text-2xl xl:text-4xl"
            >
             <div className="headerTitle py-4 lg:py-0">
              <span className="transition-all duration-300">Allah Rakha</span>
              <span className="transition-all duration-300"> Allah Rakha</span>
             </div>
            </motion.h1>
          </Link>
          {/* SOCIALS */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
