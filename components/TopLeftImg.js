import Image from "next/image";
// TOPLEFTIMG FUNCTION
const TopLeftImg = () => {
  return (
    <div className="absolute left-0 right-0 mix-blend-color-dodge z-10 opacity-50 w-[200px] xl:w-[400px]  ">
      <Image src="/top-left-img.png" width={400} height={400} alt="left-img" />
    </div>
  );
};

export default TopLeftImg;
