import Image from "next/image";
import React from "react";

const LastSection = () => {
  return (
    <div className="text-center flex flex-col items-center gap-5 max-w-210 m-auto p-5">
      <h2 className="text-3xl md:text-4xl">What's your DAO idea?</h2>
      <p className="text-grey6 font-semibold text-xl">
        Let’s chat and see how we can help{" "}
      </p>

      <div className="grid items-stretch place-items-center sm:grid-cols-2  justify-center w-full gap-5 text-bg text-sm">
        <div className="flex items-center gap-2 text-start bg-yellow p-3 rounded-xl">
          <Image
            src="/assets/images/telegram.svg"
            alt="Telegram Logo"
            width={24}
            height={24}
            className="w-10"
          />
          <div className="flex flex-col ">
            <span className="font-semibold">Telegram</span>
            <span className="text-xs">@superdao_team</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-start bg-purple-light p-3 rounded-xl">
          <Image
            src="/assets/images/at.svg"
            alt="At Logo"
            width={24}
            height={24}
            className="w-10"
          />
          <div className="flex flex-col ">
            <span className="font-semibold">Email</span>
            <span className="text-xs">hello@superdao.co</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
