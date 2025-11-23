"use client";
import { Plus } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "animate.css";

const Section1 = () => {
  return (
    <div className="flex flex-col items-center max-w-210 w-full m-auto gap-3">
      <div className="flex justify-center md:items-center gap-5  text-center max-w-120 text-wrap w-9/12">
        <Image
          src={"/assets/images/stars1.png"}
          alt="stars"
          width={200}
          height={200}
          className=" size-8 md:size-10 star1"
        />
        <h2 className="sec1-title text-3xl md:text-4xl sm:text-nowrap">
          Ready for every project
        </h2>
      </div>
      <div className="tags w-full max-w-170 flex-wrap justify-center flex gap-3 text-xs py-5">
        <div className="tag text-tag-light-pink ">Investment DAO</div>
        <div className="tag text-tag-yellow">Startup DAO</div>
        <div className="tag text-tag-purple">Service DAO</div>
        <div className="tag text-alt-blue">Community DAO</div>
        <div className="tag text-tag-blue">Impact DAO</div>
        <div className="tag text-tag-pink">DeFi DAO</div>
        <div className="tag text-tag-grey flex items-center gap-1">
          <Plus className="size-3  text-tag-dark-grey" />
          More
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center ">
        <Image
          src="/assets/images/section1-img.png"
          alt="Section 1 Image"
          width={1140}
          height={493}
          className="w-10/12 max-w-200 sec1-img"
        />
        <div className="badge text-xs text-black bg-yellow3 py-2 px-5 rounded-full font-bold absolute -bottom-4 h-8">
          1000+ projects launched on Superdao
        </div>
      </div>
    </div>
  );
};

export default Section1;
