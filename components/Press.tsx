import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Press = () => {
  return (
    <div className=" flex flex-col items-center gap-5  w-full p-5 max-w-210 m-auto">
      <div className="flex items-end justify-between w-full p-5">
        <h2 className="text-3xl md:text-4xl text-center md:w-auto w-full flex items-start justify-center gap-3 sec8-title">
          Press{" "}
          <Image
            src={"/assets/images/stars4.png"}
            width={30}
            height={30}
            alt="press"
            className="star8"
          />
        </h2>
        <div className="text-sm hidden md:flex gap-2 items-center text-grey2 sec8-title">
          See all <ArrowRight size={14} />
        </div>
      </div>
      <div className=" text-bg w-full grid p-5  gap-5 md:grid-cols-3 place-items-center items-stretch">
        {/* card 1 */}
        <div className=" bg-alt-blue max-w-90 p-5 rounded-xl text-sm flex flex-col justify-between gap-2 font-medium text-pretty  press-card">
          <div className="flex flex-col gap-2 mb-2">
            <Image
              src={"/assets/images/decrypt.svg"}
              width={100}
              height={50}
              alt="logo"
              className="w-25 mb-4"
            />
            <h5 className="font-semibold">
              Superdao Raises $10.5 Million to Build an 'All-in-One' DAO
              Platform
            </h5>{" "}
            <p className="text-xs leading-5 font-medium">
              Superdao aims to make it easier for online communities to build
              and launch DAOs
            </p>
          </div>
          <div className=" flex gap-1 items-center text-xs font-semibold">
            Read <ArrowRight size={14} />
          </div>
        </div>

        {/* card 2 */}
        <div className=" bg-purple-light  max-w-90 p-5 rounded-xl text-sm flex flex-col justify-between gap-2 font-medium text-pretty  press-card">
          <div className="flex flex-col gap-2 mb-2">
            <Image
              src={"/assets/images/blockworks.svg"}
              width={100}
              height={50}
              alt="logo"
              className="w-25 mb-4"
            />
            <h5 className="font-semibold">
              The Y Combinator of Web3 Attracts Record Number of DAO Startups
            </h5>{" "}
            <p className="text-xs leading-5 font-medium">
              DAOs and related startups made up an “overwhelming number of
              applicants” for a Web3 accelerator’s cohort this year
            </p>{" "}
          </div>
          <div className=" flex gap-1 items-center text-xs font-semibold">
            Read <ArrowRight size={14} />
          </div>
        </div>

        {/* card 3 */}
        <div className="bg-greenish-yellow max-w-90 p-5 rounded-xl text-sm flex flex-col justify-between gap-2 font-medium text-pretty  press-card">
          <div className="flex flex-col gap-2 mb-2">
            <Image
              src={"/assets/images/techcrunch.svg"}
              width={100}
              height={50}
              alt="logo"
              className="w-25 mb-4"
            />
            <h5 className="font-semibold">
              VC-backed DAO startups are racing to define what DAOs actually are
            </h5>
            <p className="text-xs leading-5 font-medium">
              Not all 'decentralized autonomous organizations' are autonomous...
              or decentralized
            </p>{" "}
          </div>
          <div className=" flex gap-1 items-center text-xs font-semibold">
            Read <ArrowRight size={14} />
          </div>
        </div>
      </div>
      <div className="text-sm flex gap-2 items-center text-grey2 md:hidden press-card">
        See all <ArrowRight size={14} />
      </div>
    </div>
  );
};

export default Press;
