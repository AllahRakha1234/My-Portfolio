// data
const projects = {
  projectsSlides: [
    {
      projectsInfo: [
        {
          title: "TextUtils Website using ReactJS",
          path: "/textutils.png",
          github_url:
            "https://github.com/AllahRakha1234/TextUtils-Website/tree/master",
          live_url: "https://arztextutils.netlify.app/",
          youtube_url: "https://youtu.be/WsPFi-uHyJQ",
        },

        {
          title: "My Portfolio Website Using NextJS",
          path: "/portfolio.png",
          github_url:
            "https://github.com/AllahRakha1234/My-Portfolio/tree/master",
          live_url: "https://arzportfolio.netlify.app/",
          youtube_url: "https://youtu.be/hVKhNwoRBvc",
        },
        {
          title: "Catalog App Using Flutter",
          path: "/catalog.png",
          github_url: "https://github.com/AllahRakha1234/catalog_app",
          live_url: "",
          youtube_url: "https://youtu.be/iKek1uv7ydQ",
        },
        {
          title: "MERN Stack Pizza Portal Webstie",
          path: "/pizzaImg1.png",
          github_url: "https://github.com/AllahRakha1234/pizza_website_oibsip",
          live_url: "",
          youtube_url: "https://www.youtube.com/watch?v=rG8hTS3GYDA",
        },
      ],
    },
    {
      projectsInfo: [
        {
          title: "Responsive Restaurant Website Using ReactJS",
          path: "/rest2.png",
          github_url:
            "https://github.com/AllahRakha1234/aidTech_restaurantWeb_temperatrueConvWeb/tree/master",
          live_url: "",
          youtube_url: "https://youtu.be/tgAoY-iBHag",
        },
        {
          title: "Book Recomm-System Using Python & Streamlit",
          path: "/book.png",
          github_url:
            "https://github.com/AllahRakha1234/Hybrid-Book-Recommendation-System/tree/master",
          live_url: "",
          youtube_url: "https://youtu.be/HKs5yQUEzJU",
        },
        {
          title: "Ping Pong & Brick Breaker Game Using Python",
          path: "/collide.png",
          github_url:
            "https://github.com/AllahRakha1234/collide_pingpong_game_python/tree/master",
          live_url: "",
          youtube_url: "https://youtu.be/nOPPoWRCuGY",
        },
        {
          title: "Chroma -- An Extension For Color Blind People",
          path: "/chroma.png",
          github_url:
            "https://github.com/AllahRakha1234/Chroma--An-Extension-For-Color-Blind-People/tree/master",
          live_url: "",
          youtube_url: "https://youtu.be/SmnV6U5QOrY",
        },
      ],
    },
  ],
};

// icons
import { BsArrowRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { SiYoutubeshorts } from "react-icons/si";

// SWIPER REACT COMPONENTS
import { Swiper, SwiperSlide } from "swiper/react";
// SWIPER STYLES
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// SWIPER MODULES
import { Pagination } from "swiper";

// REACT
import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {projects.projectsSlides.map((projects, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-y-4 xl:gap-4 cursor-pointer">
              {projects.projectsInfo.map((projectInfo, index) => {
                return (
                  <div
                    className="ralative rounded-xl flex items-center justify-center overflow-hidden group"
                    key={index}
                  >
                    <div className="flex items-center justify-center overflow-hidden relative rounded-xl">
                      {/* IMAGE */}
                      {/* <div className="max-h-[200px] max-w-[350px] rounded-xl"> */}
                      <div className="max-h-[16vh] max-w-[40vw] sm:max-h-[20vh] sm:max-w-[38vw] xl:max-h-[300px] xl:max-w-[500px] rounded-xl">
                        <Image
                          src={projectInfo.path}
                          width={500}
                          height={300}
                          alt=""
                        />
                      </div>
                      {/* OVERLAY GRADIENT */}
                      <div className="absolute flex justify-center items-center inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700">
                        {/* LINKS */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-14 group-hover:sm:-translate-y-20 transition-all duration-300 text-white">
                          <div className="flex items-center gap-x-1 sm:gap-x-2 text-[8px] sm:text-[13px] tracking-[0.1em]">
                            {/* LINK PART 1 */}
                            {projectInfo.live_url !== "" && (
                              <div className="delay-100">
                                <Link
                                  href={projectInfo.live_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <button>
                                    <BsGlobe
                                      className="text-[#17193c] text-[25px] xl:text-[35px] hover:scale-125 hover:duration-100 hover:transition-all"
                                      key={projectInfo.title}
                                    />
                                  </button>
                                </Link>
                              </div>
                            )}
                            {/* LINK PART 2 */}
                            {projectInfo.github_url !== "" && (
                              <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                                <Link
                                  href={projectInfo.github_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <button>
                                    <FaGithub
                                      className="text-[#17193c] text-[25px] xl:text-[35px] hover:scale-125 hover:duration-100 hover:transition-all"
                                      key={projectInfo.title}
                                    />
                                  </button>
                                </Link>
                              </div>
                            )}
                            {/* LINK PART 3 */}
                            {projectInfo.youtube_url !== "" && (
                              <div className="text-base sm:text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                                <Link
                                  href={projectInfo.youtube_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <button>
                                    <SiYoutubeshorts
                                      className="text-[#17193c] text-[25px] xl:text-[35px] hover:scale-125 hover:duration-100 hover:transition-all"
                                      key={projectInfo.title}
                                    />
                                  </button>
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="max-w-[100%] flex justify-center items-center px-2 md:px-1 lg:px-0">
                          {/* TITLE */}
                          {projectInfo.title && (
                            <div className=" mt-10 md:mt-16 lg:mt-24 flex justify-center items-center text-center font-semibold md:font-bold text-white bg-[#17193c] rounded-3xl py-1 px-2 text-[10px] md:text-[12px] xl:text-[14px] scale-0  transition-all duration-300 group-hover:scale-100">
                              {projectInfo.title}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
