import Image from "next/image";
import Btn from "./Btn";

const Section3 = () => {
  return (
    <div className="text-center flex flex-col items-center gap-5 max-w-210 m-auto p-5 select-none">
      <h2 className="text-3xl md:text-4xl flex items-end justify-center gap-2 h-15">
        <Image
          src={"/assets/images/stars3.png"}
          width={30}
          height={30}
          alt="press"
          className="w-10 self-start"
        />
        All the tools in one app
      </h2>
      <div className="tabs flex justify-center gap-10 items-center text-xs font-medium flex-wrap text-nowrap">
        <span className="tab text-yellow">NFT membership</span>
        <span className="tab">Member directory</span>
        <span className="tab">Treasury Feed</span>
        <span className="tab">Governance</span>
        <span className="tab">App store</span>
      </div>
      <Image
        src={"/assets/images/section3-img.png"}
        width={2500}
        height={2500}
        alt="section image"
        className=" w-10/12 max-w-200"
      />
      <Btn className="cta flex items-center justify-center bg-yellow2/15 text-yellow2 font-medium text-sm gap-1 p-2 px-5 cursor-pointer rounded-md">
        <Image
          src={"/assets/images/youtube2.svg"}
          width={100}
          height={100}
          alt="youtube logo"
          className="size-5"
        />
        Watch video
      </Btn>
    </div>
  );
};

export default Section3;
