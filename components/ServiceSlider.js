// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { MdDeveloperMode } from "react-icons/md";

// SWIPER REACT COMPONENTS
import { Swiper, SwiperSlide } from "swiper/react";
// SWIPER STYLES
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// SWIPER MODULES
import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <MdDeveloperMode />,
    title: "Web Development",
    description:
      "Build dynamic, responsive web applications using the MERN stack for robust back-end systems and seamless user experiences.",
  },
  {
    icon: <RxPencil2 />,
    title: "Maintenance and Support",
    description:
      "Provide ongoing maintenance and support to ensure smooth operation and security of your web applications.",
  },
  {
    icon: <RxDesktop />,
    title: "Game Development",
    description:
      "Design and develop engaging and immersive games using modern technologies to provide users with captivating and interactive experiences.",
  },
  {
    icon: <RxReader />,
    title: "Database Management",
    description:
      "Design, manage, and optimize databases using MongoDB and MySQL to ensure efficient data storage, retrieval, and management.",
  },
  {
    icon: <RxRocket />,
    title: "API Development and Integration",
    description:
      "Develop and integrate APIs to enable seamless communication between different software systems.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-white/5 h-max rounded px-4 py-4 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer">
              {/* ICON */}
              <div className="text-accent text-2xl md:text-3xl xl:text-4xl mb-4">
                {item.icon}
              </div>
              {/* TITLE AND DESCRIPTION */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* ARROW */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
