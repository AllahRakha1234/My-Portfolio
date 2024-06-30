// NEXT-IMAGE
import Image from "next/image";

// BULB FUNCTION
const Bulb = () => {
  return (
    <div className="absolute -left-32 -bottom-24 xl:-bottom-28 rotate-12 animate-pulse duration-75 w-[180px] xl:w-[200px] mix-blend-color-dodge">
      <Image
        src={"/bulb.png"}
        width={260}
        height={200}
        alt="bulbImage"
        className="h-full w-full"
      />
    </div>
  );
};

export default Bulb;
