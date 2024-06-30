// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

// icons
import { BsArrowRight } from "react-icons/bs";

// SWIPER REACT COMPONENTS
import { Swiper, SwiperSlide } from "swiper/react";
// SWIPER STYLES
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// SWIPER MODULES
import { Pagination } from "swiper";

// REACT-IMAGE
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-y-4 xl:gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="ralative rounded-xl flex items-center justify-center overflow-hidden group"
                    key={index}
                  >
                    <div className="flex items-center justify-center overflow-hidden relative rounded-xl">
                      {/* IMAGE */}
                      {/* <div className="max-h-[200px] max-w-[350px] rounded-xl"> */}
                      <div className="max-h-[18vh] max-w-[40vw] sm:max-h-[20vh] sm:max-w-[38vw] xl:max-h-[300px] xl:max-w-[500px]  rounded-xl">
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt=""
                        />
                      </div>
                      {/* OVERLAY GRADIENT */}
                      <div className="absolute flex justify-center items-center inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700">
                        {/* TITLE */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10   xl:group-hover:-translate-y-20 transition-all duration-300 text-white">
                          <div className="flex items-center gap-x-1 sm:gap-x-2 text-[8px] sm:text-[13px] tracking-[0.1em]">
                            {/* TITLE PART 1 */}
                            <div className="delay-100">LIVE</div>
                            {/* TITLE PART 2 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              PROJECT
                            </div>
                            {/* ICON */}
                            <div className="text-base sm:text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
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
