// NEXT IMAGE
import Image from "next/image";

// IMPORTING VARIANTS
import { fadeIn } from "../variants";

// AVATAR FUNCTION
const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src="/ar.png"
        height={678}
        width={737}
        className="translate-z-0 w-full h-full rotate-90"
        alt="Avatar Image"
      />
    </div>
  );
};

export default Avatar;
