import Image from "next/image";
import Link from "next/link";
const SocialLinks = () => {
  return (
    <div className="flex gap-4 justify-between w-full max-w-160">
      <Link
        href={"#"}
        className="p-2 rounded-full  bg-blue/15 size-12 flex justify-center items-center cursor-pointer "
      >
        <Image
          src={"/assets/images/twitter.svg"}
          width={100}
          height={100}
          alt="twitter"
          className="size-5"
        />
      </Link>
      <Link
        href={"#"}
        className="p-2 rounded-full  bg-indigo/15 size-12 flex justify-center items-center cursor-pointer "
      >
        <Image
          src={"/assets/images/telegram.png"}
          width={100}
          height={100}
          alt="telegram"
          className="size-5 m-auto"
        />
      </Link>
      <Link
        href={"#"}
        className="p-2 rounded-full  bg-alt-pink/15 size-12 flex justify-center items-center cursor-pointer "
      >
        <Image
          src={"/assets/images/youtube.png"}
          width={100}
          height={100}
          alt="youtube"
          className="size-5"
        />
      </Link>
      <Link
        href={"#"}
        className="p-2 rounded-full  bg-alt-purple/15 size-12 flex justify-center items-center cursor-pointer "
      >
        <Image
          src={"/assets/images/discord.png"}
          width={100}
          height={100}
          alt="discord"
          className="size-5"
        />
      </Link>
    </div>
  );
};

export default SocialLinks;
