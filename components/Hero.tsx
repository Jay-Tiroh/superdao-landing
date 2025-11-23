import Image from "next/image";

import "animate.css";
import Btn from "./Btn";

const Hero = () => {
  return (
    <div className="flex justify-center ">
      <div className="hero-text max-w-xs md:max-w-120 lg:max-w-145 text-center flex flex-col gap-8 drop-shadow-2xl drop-shadow-white/10 items-center z-10 pb-10">
        <h1
          className=" text-4xl md:text-5xl lg:text-6xl font-bold leading-13 
        lg:leading-15 tracking-wide hero-title"
        >
          The easiest way to start a DAO
        </h1>
        <p className="font-medium leading-8 hero-text">
          An all-in-one platform to start, manage and grow a decentralized
          autonomous organization
        </p>
        <Btn className="hero-text px-5 p-3 bg-yellow text-black font-semibold cursor-pointer text-center rounded-md max-w-36 text-sm m-auto hero-cta">
          Get started
        </Btn>

        <Image
          src={"/assets/images/arrows.png"}
          width={150}
          height={150}
          alt="arrows"
          className="size-5 mt-5"
        />
      </div>
    </div>
  );
};

export default Hero;
