// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

// NEXT LINK
import Link from "next/link";
// FRAMER-MOTION
import { motion } from "framer-motion";
// NEXT ROUTER
import { useRouter } from "next/router";

// NAV FUNCTION
const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="flex flex-col items-center gap-y-4 fixed bottom-0 mt-auto h-max z-50 top-0 w-full xl:justify-center xl:right-[2%] xl:w-16 xl:max-w-md xl:h-screen">
      <motion.div
        initial={{ x: -2000, scale: 0 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
        className="flex w-full items-center justify-between gap-y-6 px-4 py-8 h-[80px] bg-white/10 text-3xl backdrop-blur-sm xl:flex-col xl:justify-center xl:px-0 xl:text-xl xl:h-max xl:rounded-full md:px-40"
      >
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && "text-accent"
              } relative flex items-center group hover:text-accent transition-all duration-300`}
              href={link.path}
              key={index}
            >
              {/* TOOLTIP */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex ">
                <div className="bg-white text-primary relative flex items-center flex-row p-[6px] rounded-[3px]">
                  <div className="text-[12px] capitalize leading-none font-semibold">
                    {link.name}
                  </div>
                  {/* ARROW */}
                  <div className="border-solid border-l-white border-l-8 border-y-[6px] border-y-transparent border-r-0 absolute -right-2"></div>
                </div>
              </div>
              {/* ICON */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </motion.div>
    </nav>
  );
};

export default Nav;
