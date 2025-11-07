"use client";

import "animate.css";

import {
  CreditCardIcon,
  Folders,
  Laptop2,
  Menu,
  Plus,
  Route,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
// import { Accordion } from "./ui/accordion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import SocialLinks from "./SocialLinks";
import Btn from "./Btn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="select-none relative">
      {/* mobile-navbar */}
      <div className="flex flex-col sm:hidden p-5 gap-5 items-center font-medium text-sm">
        <div className="flex justify-between items-center w-full">
          <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="w-32"
          />
          <motion.div
            whileHover={{ scale: 1.0 }}
            whileTap={{ scale: 0.9 }}
            className="outline-0!"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <X className=" text-yellow2 cursor-pointer" />
            ) : (
              <Menu className=" text-yellow2 cursor-pointer" />
            )}
          </motion.div>
        </div>

        {isOpen && (
          <div className="nav-content w-full flex justify-center gap-4 absolute top-20 bg-bg/80 pb-10 p-5 z-99 shadow-2xl">
            <div className="nav-content w-full max-w-lg flex flex-col gap-4 ">
              <motion.div
                whileHover={{ scale: 1.0 }}
                whileTap={{ scale: 0.9 }}
                className="btn px-5 p-3  bg-yellow2/20  text-yellow2 backdrop-blur-md rounded-lg hover:bg-yellow2/30 transition cursor-pointer hover:shadow-md flex flex-col justify-center h-12"
              >
                Login
              </motion.div>
              <div className="">
                <Accordion
                  type="single"
                  collapsible
                  className="flex flex-col gap-5"
                >
                  <AccordionItem
                    value="item-1"
                    className="border-none!  px-5 bg-light-bg backdrop-blur-md rounded-lg transition cursor-pointer hover:shadow-md "
                  >
                    <AccordionTrigger className="h-12 no-underline!">
                      Product
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-5">
                      <Link href={"#"} className="flex gap-6 items-center">
                        <div className="p-2 bg-svg-bg rounded-sm">
                          <Laptop2 className="size-4 text-purple" />
                        </div>
                        Demo
                      </Link>
                      <Link href={"#"} className="flex gap-6 items-center">
                        <div className="p-2 bg-svg-bg rounded-sm">
                          <Route className="size-4 text-pink" />
                        </div>
                        Roadmap
                      </Link>
                      <Link href={"#"} className="flex gap-6 items-center">
                        <div className="p-2 bg-svg-bg rounded-sm">
                          <Plus className="size-4 text-blue" />
                        </div>
                        What's New
                      </Link>
                      <Link href={"#"} className="flex gap-6 items-center">
                        <div className="p-2 bg-svg-bg rounded-sm">
                          <CreditCardIcon className="size-4 text-yellow-light" />
                        </div>
                        Pricing
                      </Link>
                      <Link href={"#"} className="flex gap-6 items-center">
                        <div className="p-2 bg-svg-bg rounded-sm">
                          <Folders className="size-4 text-purple" />
                        </div>
                        App Store
                      </Link>
                      <Link href={"#"} className="flex gap-6 items-center">
                        <div className="p-2 bg-svg-bg rounded-sm">
                          <User className="size-4 text-yellow-light" />
                        </div>
                        Developers (later)
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-2"
                    className="border-none!  px-5 bg-light-bg backdrop-blur-md rounded-lg transition cursor-pointer hover:shadow-md "
                  >
                    <AccordionTrigger className="h-12 no-underline!">
                      Use cases
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-5">
                      Nothing listed in the design
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-3"
                    className="border-none!  px-5 bg-light-bg backdrop-blur-md rounded-lg transition cursor-pointer hover:shadow-md "
                  >
                    <AccordionTrigger className="h-12 no-underline!">
                      Learn
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-5">
                      Nothing listed in the design
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-4"
                    className="border-none!  px-5 bg-light-bg backdrop-blur-md rounded-lg transition cursor-pointer hover:shadow-md "
                  >
                    <AccordionTrigger className="h-12 no-underline!">
                      About
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-5">
                      Nothing listed in the design
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-5"
                    className="border-none!  px-5 bg-light-bg backdrop-blur-md rounded-lg transition cursor-pointer hover:shadow-md "
                  >
                    <AccordionTrigger className="h-12 no-underline!">
                      Jobs
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-5">
                      Nothing listed in the design
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="social-links w-full max-w-sm m-auto mt-5">
                <SocialLinks />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* desktop-navbar */}
      <div className="hidden sm:flex justify-between items-center p-6 font-medium text-sm m-auto max-w-4xl">
        <Image
          src="/assets/images/logo.svg"
          alt="Logo"
          width={100}
          height={100}
          className="w-32"
        />
        <div className="flex gap-8">
          <Link href="#" className="nav-link">
            Product
          </Link>
          <Link href="#" className="nav-link">
            Use cases
          </Link>
          <Link href="#" className="nav-link">
            Learn
          </Link>
          <Link href="#" className="nav-link">
            About
          </Link>
          <Link href="#" className="nav-link">
            Jobs
          </Link>
        </div>

        <Btn className="btn px-5 p-2 text-xs bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 transition-colors duration-150 cursor-pointer">
          Login
        </Btn>
      </div>
    </div>
  );
};

export default Navbar;
