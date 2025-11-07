import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Podcasts = () => {
  return (
    <div className=" flex flex-col items-center gap-5  w-full p-5 max-w-210 m-auto">
      <div className="flex items-end justify-between w-full p-5">
        <h2 className="text-3xl md:text-4xl text-center md:w-auto w-full flex items-start justify-center gap-3">
          <Image
            src={"/assets/images/stars5.png"}
            width={30}
            height={30}
            alt="press"
          />
          Podcasts{" "}
        </h2>
        <div className="text-sm hidden md:flex gap-2 items-center text-grey2">
          See all <ArrowRight size={14} />
        </div>
      </div>
      <div className=" w-full grid p-5  gap-5 md:grid-cols-3 place-items-center items-stretch">
        {/* card 1 */}
        <div className=" bg-grey border-grey3 border-2 max-w-90 p-5 rounded-xl text-sm flex flex-col justify-between gap-2 font-medium text-pretty">
          <div className="flex flex-col gap-2 mb-2">
            <Image
              src={"/assets/images/pomp.png"}
              width={100}
              height={50}
              alt="logo"
              className="w-10 mb-4"
            />
            <h5 className="font-semibold text-sm">
              Understanding DAOs with Yury Lifshits
            </h5>{" "}
            <p className="text-grey5 text-xs leading-5">
              The Pomp Podcast by Anthony Pompliano
            </p>
          </div>
          <div className=" flex gap-1 items-center text-xs font-semibold">
            Listen <ArrowRight size={14} />
          </div>
        </div>

        {/* card 2 */}
        <div className=" bg-grey border-grey3 border-2  max-w-90 p-5 rounded-xl text-sm flex flex-col justify-between gap-2 font-medium text-pretty">
          <div className="flex flex-col gap-2 mb-2">
            <Image
              src={"/assets/images/unstoppable.png"}
              width={100}
              height={50}
              alt="logo"
              className="w-10 mb-4"
            />
            <h5 className="font-semibold text-sm">
              Everything You Need to Know About DAOs with Yury Lifshits from
              Superdao
            </h5>{" "}
            <p className="text-grey5 text-xs leading-5">
              The Unstoppable Podcast by Josh Gordon
            </p>{" "}
          </div>
          <div className=" flex gap-1 items-center text-xs font-semibold">
            Watch <ArrowRight size={14} />
          </div>
        </div>

        {/* card 3 */}
        <div className="bg-grey border-grey3 border-2 max-w-90 p-5 rounded-xl text-sm flex flex-col justify-between gap-2 font-medium text-pretty">
          <div className="flex flex-col gap-2 mb-2">
            <Image
              src={"/assets/images/zima.png"}
              width={200}
              height={200}
              alt="logo"
              className="w-10 mb-4"
            />
            <h5 className="font-semibold text-sm">
              Yury Lifshits - Superdao: The “Shopify” for DAOs
            </h5>
            <p className="text-grey5 text-xs leading-5">
              Zima Red by Andrew Stainwold
            </p>{" "}
          </div>
          <div className=" flex gap-1 items-center text-xs font-semibold">
            Listen <ArrowRight size={14} />
          </div>
        </div>
      </div>
      <div className="text-sm flex gap-2 items-center text-grey2 md:hidden">
        See all <ArrowRight size={14} />
      </div>
    </div>
  );
};

export default Podcasts;
