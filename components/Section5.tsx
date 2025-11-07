import Image from "next/image";
import React from "react";

const Section5 = () => {
  return (
    <div className="text-center flex flex-col items-center gap-5 max-w-210 m-auto p-5">
      <h2 className="text-3xl md:text-4xl">Help at every step</h2>

      <div className="flex items-center gap-2 justify-center flex-row-reverse flex-wrap-reverse sm:flex-nowrap max-w-65 sm:max-w-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <Image
            key={index}
            src={`/assets/images/person${index + 1}.png`}
            width={50}
            height={50}
            alt={`person${index + 1}`}
            className="w-20"
          />
        ))}
      </div>
      <div className="flex flex-col max-w-160  gap-2 items-center font-semibold font-loos">
        <div className="flex items-center gap-2">
          <span className="">Success managers</span>
          <Image
            src={"/assets/images/star1.svg"}
            width={50}
            height={50}
            alt="star"
            className="size-5"
          />
          <span className="">Knowledge base</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="">Chat support</span>
          <Image
            src={"/assets/images/star2.svg"}
            width={50}
            height={50}
            alt="star"
            className="size-5"
          />
          <span className="">Tutorials</span>
          <Image
            src={"/assets/images/star3.svg"}
            width={50}
            height={50}
            alt="star"
            className="size-5"
          />
          <span className="">Templates</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="">Smart Contract development</span>
          <Image
            src={"/assets/images/star4.svg"}
            width={50}
            height={50}
            alt="star"
            className="size-5"
          />
          <span className="">Events</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="">Education</span>
          <Image
            src={"/assets/images/star5.svg"}
            width={50}
            height={50}
            alt="star"
            className="size-5"
          />
          <span className="">Guides</span>
        </div>
      </div>
    </div>
  );
};

export default Section5;
