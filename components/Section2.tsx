import React from "react";
import { TextEffect } from "./motion-primitives/text-effect";
import Image from "next/image";

const Section2 = () => {
  return (
    <div className="text-center mt-10 flex flex-col items-center max-w-210 w-full m-auto p-5">
      <h2 className="text-3xl md:text-4xl mb-5 flex items-end h-20 justify-center sm:h-15 sm:gap-2 text-pretty">
        Designed for the full journey
        <Image
          src={"/assets/images/stars2.png"}
          width={30}
          height={30}
          alt="press"
          className="w-10 self-start"
        />
      </h2>

      <div className="steps flex flex-col gap-2 text-xl">
        <span className="step">
          <TextEffect
            per="char"
            delay={0.2}
            preset="blur"
            variants={{
              container: {
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  rotateX: 90,
                  y: 10,
                },
                visible: {
                  opacity: 1,
                  rotateX: 0,
                  y: 0,
                  transition: {
                    duration: 0.2,
                  },
                },
              },
            }}
          >
            Organisation design
          </TextEffect>
        </span>
        <span className="step">
          <TextEffect
            per="char"
            delay={0.7}
            preset="blur"
            variants={{
              container: {
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  rotateX: 90,
                  y: 10,
                },
                visible: {
                  opacity: 1,
                  rotateX: 0,
                  y: 0,
                  transition: {
                    duration: 0.2,
                  },
                },
              },
            }}
          >
            Smart contract development
          </TextEffect>
        </span>
        <span className="step">
          <TextEffect
            per="char"
            delay={1.2}
            preset="blur"
            variants={{
              container: {
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  rotateX: 90,
                  y: 10,
                },
                visible: {
                  opacity: 1,
                  rotateX: 0,
                  y: 0,
                  transition: {
                    duration: 0.2,
                  },
                },
              },
            }}
          >
            Fundraising
          </TextEffect>
        </span>
        <span className="step text-blue!">
          <TextEffect
            per="char"
            delay={1.7}
            preset="blur"
            variants={{
              container: {
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  rotateX: 90,
                  y: 10,
                },
                visible: {
                  opacity: 1,
                  rotateX: 0,
                  y: 0,
                  transition: {
                    duration: 0.2,
                  },
                },
              },
            }}
          >
            Launch marketing
          </TextEffect>
        </span>
        <span className="step">
          <TextEffect
            per="char"
            delay={2.2}
            preset="blur"
            variants={{
              container: {
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  rotateX: 90,
                  y: 10,
                  filter: "blur(30px) brightness(10%)",
                },
                visible: {
                  opacity: 1,
                  rotateX: 0,
                  y: 0,
                  filter: "blur(0px) brightness(100%)",
                  transition: {
                    duration: 0.2,
                  },
                },
              },
            }}
          >
            Member onboarding
          </TextEffect>
        </span>
        <span className="step">
          <TextEffect
            per="char"
            delay={2.7}
            preset="blur"
            variants={{
              container: {
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  rotateX: 90,
                  y: 10,
                },
                visible: {
                  opacity: 1,
                  rotateX: 0,
                  y: 0,
                  transition: {
                    duration: 0.2,
                  },
                },
              },
            }}
          >
            Contributor management
          </TextEffect>
        </span>
        <span className="step">
          <TextEffect
            per="char"
            delay={3.2}
            preset="blur"
            variants={{
              container: {
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  rotateX: 90,
                  y: 10,
                },
                visible: {
                  opacity: 1,
                  rotateX: 0,
                  y: 0,
                  transition: {
                    duration: 0.2,
                  },
                },
              },
            }}
          >
            DAO operations
          </TextEffect>
        </span>
      </div>
    </div>
  );
};

export default Section2;
