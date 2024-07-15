// testimonial data
const testimonialData = [
  {
    image: "/t-avt-3.png",
    name: "NA",
    position: "NA",
    message: "No testimonial yet.",
  },
  {
    image: "/t-avt-3.png",
    name: "NA",
    position: "NA",
    message: "No testimonial yet.",
  },
];

// icons
import { FaQuoteLeft } from "react-icons/fa";

// SWIPER REACT COMPONENTS
import { Swiper, SwiperSlide } from "swiper/react";
// SWIPER STYLES
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// SWIPER MODULES
import { Navigation, Pagination } from "swiper";

// REACT-IMAGE
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[400px] md:h-[300px] xl:h-[400px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 px-10 sm:px-16 h-full">
              {/* AVATAR, NAME, POSTION */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* AVATAR */}
                  <div className="mb-2 mx-auto h-[80] w-[80px] sm:h-[100px] sm:w-[100px]">
                    <Image
                      src={person.image}
                      height={100}
                      width={100}
                      alt="client-image"
                    />
                  </div>
                  {/* NAME */}
                  <div className="text-lg">{person.name}</div>
                  {/* POSTION */}
                  <div className="text-[12px] uppercase tracking-widest font-extralight">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* QUOTE AND MESSAGE */}
              <div className=" flex-1 flex justify-center flex-col relative before:w-[2px] xl:before:h-[200px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:pl-20">
                <div>
                  {/* QUOTE ICON */}
                  <div className="mb-2 lg:mb-4">
                    <FaQuoteLeft className="text-3xl md:text-4xl xl:text-5xl mx-auto md:mx-0 text-white/20" />
                  </div>
                  {/* MESSAGE */}
                  <div className="text-[15px] xl:text-lg text-center md:text-left overflow-y-auto h-[20vh] sm:h-full">
                    {person.message}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
