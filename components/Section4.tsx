import Image from "next/image";

const Section4 = () => {
  return (
    <div className="text-center flex flex-col items-center gap-5 max-w-210 m-auto p-5">
      <h2 className="sec4-title text-3xl md:text-4xl flex items-end  justify-center h-15 gap-2 text-pretty">
        Works with
        <Image
          src={"/assets/images/stars4.png"}
          width={30}
          height={30}
          alt="press"
          className="w-10 self-start star4"
        />
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-5 items-center text-xs font-medium">
        <div className="flex flex-col items-center gap-2 sec4-item">
          <Image
            src={"/assets/images/ethereum.svg"}
            width={100}
            height={100}
            alt="ethereum"
            className=" w-20 m-auto"
          />

          <span>Ethereum</span>
        </div>
        {/*  */}
        <div className="flex flex-col items-center gap-2 sec4-item">
          <Image
            src={"/assets/images/polygon.svg"}
            width={100}
            height={100}
            alt="polygon"
            className=" w-20 m-auto"
          />

          <span>Polygon</span>
        </div>
        <div className="flex flex-col items-center gap-2 sec4-item">
          <Image
            src={"/assets/images/gnosis.svg"}
            width={100}
            height={100}
            alt="gnosis"
            className=" w-20 m-auto"
          />
          <span>Gnosis Safe</span>
        </div>
        <div className="flex flex-col items-center gap-2 sec4-item">
          <Image
            src={"/assets/images/snapshot.svg"}
            width={100}
            height={100}
            alt="snapshot"
            className=" w-20 m-auto"
          />

          <span>Snapshot</span>
        </div>
        <div className="flex flex-col items-center gap-2 sec4-item">
          <Image
            src={"/assets/images/ens.svg"}
            width={100}
            height={100}
            alt="ens"
            className=" w-20 m-auto"
          />

          <span>ENS</span>
        </div>
        <div className="flex flex-col items-center gap-2 sec4-item">
          <Image
            src={"/assets/images/opensea.svg"}
            width={100}
            height={100}
            alt="opensea"
            className=" w-20 m-auto"
          />

          <span>Opensea</span>
        </div>
      </div>
    </div>
  );
};

export default Section4;
