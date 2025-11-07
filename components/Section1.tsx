"use client";
import { Plus } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "animate.css";

const Section1 = () => {
  const tagsContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!tagsContainerRef.current) return;

    const tags = tagsContainerRef.current.querySelectorAll(".tag");

    // Intersection Observer setup
    const options: IntersectionObserverInit = {
      root: null, // relative to the viewport
      rootMargin: "0px",
      threshold: 0.1, // trigger when 10% of the container is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 2. When the container enters the viewport, animate the children
          observer.unobserve(entry.target); // Stop observing after it's in view

          // Iterate over all tags to apply the staggered animation
          tags.forEach((tag, index) => {
            // Calculate delay: e.g., 50ms per element
            const delay = index * 50;

            // Use setTimeout for staggering
            setTimeout(() => {
              // Apply Animate.css classes to trigger the animation
              tag.classList.add("animate__animated", "animate__bounceInDown");
            }, delay);
          });
        }
      });
    }, options); // Start observing the parent container
    observer.observe(tagsContainerRef.current);

    // Cleanup function: disconnect observer when the component unmounts
    return () => {
      if (tagsContainerRef.current) {
        observer.unobserve(tagsContainerRef.current);
      }
    };
  }, []);
  return (
    <div className="flex flex-col items-center max-w-210 w-full m-auto gap-3">
      <div className="flex justify-center md:items-center gap-5  text-center max-w-120 text-wrap w-9/12">
        <Image
          src={"/assets/images/stars1.png"}
          alt="stars"
          width={200}
          height={200}
          className=" size-8 md:size-10"
        />
        <h2 className="text-3xl md:text-4xl sm:text-nowrap">
          Ready for every project
        </h2>
      </div>
      <div
        className="tags w-full max-w-170 flex-wrap justify-center flex gap-3 text-xs py-5"
        ref={tagsContainerRef}
      >
        <div className="tag text-tag-light-pink ">Investment DAO</div>
        <div className="tag text-tag-yellow">Startup DAO</div>
        <div className="tag text-tag-purple">Service DAO</div>
        <div className="tag text-alt-blue">Community DAO</div>
        <div className="tag text-tag-blue">Impact DAO</div>
        <div className="tag text-tag-pink">DeFi DAO</div>
        <div className="tag text-tag-grey flex items-center gap-1">
          <Plus className="size-3 text-tag-dark-grey" />
          More
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center ">
        <Image
          src="/assets/images/section1-img.png"
          alt="Section 1 Image"
          width={1140}
          height={493}
          className="w-10/12 max-w-200"
        />
        <div className="badge text-xs text-black bg-yellow3 py-2 px-5 rounded-full font-bold absolute -bottom-4 h-8">
          1000+ projects launched on Superdao
        </div>
      </div>
    </div>
  );
};

export default Section1;
