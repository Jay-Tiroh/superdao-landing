import Image from "next/image";

const Section2 = () => {
  return (
    <div className="text-center mt-10 flex flex-col items-center max-w-210 w-full m-auto p-5">
      <h2 className="text-3xl md:text-4xl mb-5 flex items-end h-20 justify-center sm:h-15 sm:gap-2 text-pretty sec2-title">
        Designed for the full journey
        <Image
          src={"/assets/images/stars2.png"}
          width={30}
          height={30}
          alt="press"
          className="w-10 self-start star2"
        />
      </h2>

      <div className="steps flex flex-col gap-2 text-xl">
        <span className="step">Organisation design</span>
        <span className="step">Smart contract development</span>
        <span className="step">Fundraising</span>
        <span className="step text-blue!">Launch marketing</span>
        <span className="step">Member onboarding</span>
        <span className="step">Contributor management</span>
        <span className="step">DAO operations</span>
      </div>
    </div>
  );
};

export default Section2;
