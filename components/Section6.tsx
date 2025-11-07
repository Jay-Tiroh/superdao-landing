import Image from "next/image";
import React from "react";
import Btn from "./Btn";

const Section6 = () => {
  return (
    <div className="text-center flex flex-col items-center gap-5 w-[90%] rounded-lg border-highlight-grey border max-w-130 m-auto p-5 bg-grey relative text-sm ">
      <Image
        src={"/assets/images/lights.svg"}
        width={500}
        height={500}
        alt="rays svg"
        className="w-[90%] m-auto absolute top-0   pointer-events-none"
      />

      {/* content */}
      <div className="flex flex-col items-center gap-5 z-10">
        <h2 className="text-3xl md:text-4xl">Weekly digest</h2>
        <p className="text-grey4">Latest news in DAOs and Web3</p>

        {/* input field */}
        <div className="flex gap-5 justify-center items-center text-xs ">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            className="bg-grey px-5 p-2 rounded-md placeholder:text-highlight-grey border-highlight-grey border-2 outline-0"
          />
          <Btn className="h-fit cursor-pointer p-2 px-5 bg-light-purple text-bg  font-semibold rounded-lg flex items-center">
            Subscribe
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default Section6;
