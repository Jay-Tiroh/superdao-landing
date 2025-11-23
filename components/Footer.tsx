import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialLinks from "./SocialLinks";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const Footer = () => {
  return (
    <div className="w-full bg-grey">
      <div className="flex items-center justify-between flex-col md:flex-row p-5 max-w-210 m-auto">
        <Image
          src="/assets/images/logo.svg"
          alt="Logo"
          width={100}
          height={100}
          className="w-32 footer-item"
        />
        <div className="flex justify-between items-center p-6 font-medium text-sm ">
          <div className="flex gap-8">
            <Link href="#" className="nav-link footer-item">
              About
            </Link>
            <Link href="#" className="nav-link footer-item">
              Jobs
            </Link>
            <Popover>
              <PopoverTrigger className="nav-link footer-item">
                Legal
              </PopoverTrigger>
              <PopoverContent className="text-xs bg-grey/70 flex flex-col p-0!  text-white/90 w-fit">
                <div className="flex items-center gap-1  p-2 hover:bg-grey2/20 w-full">
                  <Image
                    src="/assets/images/documents.svg"
                    alt="Privacy Policy"
                    width={18}
                    height={18}
                  />{" "}
                  Privacy Policy
                </div>
                <div className="flex items-center gap-1 p-2 hover:bg-grey2/20 w-full">
                  <Image
                    src="/assets/images/documents.svg"
                    alt="Terms of Use"
                    width={18}
                    height={18}
                  />{" "}
                  Terms of Use
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="md:w-2/5 max-w-64">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Footer;
