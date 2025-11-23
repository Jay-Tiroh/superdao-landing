import Image from "next/image";
import React from "react";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
const BackedBy = () => {
  const logos = [
    "alliance",
    "digital",
    "one-block",
    "fika",
    "pear",
    "shima",
    "great-oaks",
    "norwest",
    "fifty",
    "circle",
    "protocol",
    "ventures",
  ];
  return (
    <div className="text-center flex flex-col items-center gap-5  w-full p-5">
      <h2 className=" sec7-title text-3xl md:text-4xl flex items-start gap-3">
        Backed By
        <Image
          src={"/assets/images/stars5.png"}
          width={30}
          height={30}
          alt="stars"
          className=" rotate-y-180 star7"
        />
      </h2>
      <InfiniteSlider
        speedOnHover={20}
        gap={24}
        speed={40}
        className="w-full max-w-[90%] opacity-85"
      >
        {logos.map((logo, i) => (
          <div
            key={i}
            className="bg-grey max-w-48 border-highlight-grey border rounded-lg h-15! flex items-center justify-center p-5 w-fit! drop-shadow-2xl "
          >
            <Image
              src={`/assets/images/${logo}.svg`}
              width={500}
              height={500}
              alt="backed by"
              className="max-h-10 object-contain w-fit"
            />
          </div>
        ))}
      </InfiniteSlider>
      <InfiniteSlider
        reverse={true}
        speedOnHover={20}
        gap={24}
        speed={40}
        className="w-full max-w-[90%] opacity-85"
      >
        {logos.map((logo, i) => (
          <div
            key={i}
            className="bg-grey max-w-48 border-highlight-grey border rounded-lg h-15! flex items-center justify-center p-5 w-fit! drop-shadow-2xl "
          >
            <Image
              src={`/assets/images/${logo}.svg`}
              width={500}
              height={500}
              alt="backed by"
              className="max-h-10 object-contain w-fit"
            />
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
};

export default BackedBy;
