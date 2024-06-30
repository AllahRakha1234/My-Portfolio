// NEXT IMAGE
import Image from "next/image";

// CIRCLE FUNCTION
const Circles = () => {
  return (
    <div className="w-[190px] xl:w-[260px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10 rotate-3">
      <Image
        src="/circles.png"
        height={260}
        width={200}
        alt=""
        className="w-full h-full "
      />
    </div>
  );
};

export default Circles;
