"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Animations = () => {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    // Kill old animations when route changes
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.globalTimeline.clear();

    // Refresh on layout shifts (important for mobile)
    ScrollTrigger.refresh(true);

    const heroTitle = document.querySelector(".hero-title");
    const archiveTitle = document.querySelector(".archive-title");

    let heroSplit: SplitText | null = null;
    let archTitleSplit: SplitText | null = null;

    if (heroTitle) {
      heroSplit = new SplitText(heroTitle, { type: "words,chars" });
    }

    // ---------------- NAVBAR ----------------
    gsap.from(".nav-item", {
      y: -30,
      opacity: 0,
      stagger: 0.15,
      ease: "power3.out",
      duration: 1,
    });

    // ---------------- HERO ----------------
    if (heroSplit) {
      gsap.from(heroSplit.chars, {
        xPercent: 100,
        opacity: 0,
        stagger: 0.03,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.5,
      });
    }

    gsap.from(".hero-text", {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
      duration: 0.8,
      delay: 1,
    });
    gsap.to(".hero-cta", {
      scale: 1.03,
      ease: "sine.out",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });

    // Helper function (TS safe now)
    const scrollAnim = (
      selector: string,
      props: gsap.TweenVars = {},
      triggerSelector?: string
    ) => {
      gsap.from(selector, {
        scrollTrigger: {
          trigger: triggerSelector || selector,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
        ...props,
      });
    };

    // ---------------- Section 1 ----------------
    scrollAnim(".sec1-title", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.7,
      delay: 1,
    });
    scrollAnim(".tag", {
      y: -100,
      opacity: 0,
      stagger: 0.25,
      duration: 0.7,
      delay: 1.4,
    });
    scrollAnim(".sec1-img", {
      scale: 0.8,
      opacity: 0,
      duration: 0.7,
    });
    scrollAnim(".badge", {
      x: -100,
      opacity: 0,
      duration: 0.7,
    });

    scrollAnim(".star1", {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      delay: 1,
    });

    // ---------------- Section 2 ----------------
    scrollAnim(".sec2-title", {
      y: 40,
      opacity: 0,
      duration: 0.7,
    });
    scrollAnim(".star2", {
      scale: 0.5,
      opacity: 0,
      duration: 1,
    });
    scrollAnim(".step", {
      y: 40,
      scale: 1.3,
      opacity: 0,
      stagger: 0.5,
      duration: 0.7,
    });

    // ---------------- Section 3 ----------------
    scrollAnim(".sec3-title", {
      y: 40,
      opacity: 0,
      duration: 0.7,
    });

    scrollAnim(".star3", {
      scale: 0.5,
      opacity: 0,
      duration: 1,
    });

    scrollAnim(".tab", {
      x: -40,
      scale: 1.3,
      opacity: 0,
      stagger: 0.5,
      duration: 0.7,
    });

    scrollAnim(".sec3-img", {
      scale: 0.8,
      opacity: 0,
      duration: 0.7,
    });
    scrollAnim(".sec3-cta", {
      scale: 0.5,
      opacity: 0,
      duration: 0.7,
    });

    // ---------------- Section 4 ----------------
    scrollAnim(".sec4-title", {
      y: 40,
      opacity: 0,
      duration: 0.7,
    });

    scrollAnim(".star4", {
      scale: 0.5,
      opacity: 0,
      duration: 1,
    });

    scrollAnim(".sec4-item", {
      x: -40,
      scale: 1.3,
      opacity: 0,
      stagger: 0.15,
      duration: 0.7,
    });

    // ---------------- Section 5 ----------------
    scrollAnim(".sec5-title", {
      y: 40,
      opacity: 0,
      duration: 0.7,
    });

    scrollAnim(".star5", {
      scale: 0.5,
      opacity: 0,
      duration: 1,
    });

    scrollAnim(".sec5-person", {
      y: -100,
      scale: 1.3,
      opacity: 0,
      stagger: 0.15,
      duration: 0.7,
    });

    scrollAnim(".sec5-item", {
      y: 40,
      scale: 1.3,
      opacity: 0,
      stagger: 0.5,
      duration: 0.7,
    });

    // ---------------- Section 6 ----------------
    scrollAnim(".sec6", {
      scale: 0.5,
      opacity: 0,
      duration: 1,
    });

    // ---------------- BackedBy Section ----------------
    scrollAnim(".sec7-title", {
      y: 40,
      opacity: 0,
      duration: 0.7,
    });

    scrollAnim(".star7", {
      scale: 0.5,
      opacity: 0,
      duration: 1,
    });

    // ---------------- Press Section ----------------
    scrollAnim(".sec8-title", {
      y: 40,
      opacity: 0,
      duration: 0.7,
    });

    scrollAnim(".star8", {
      scale: 0.5,
      opacity: 0,
      duration: 1,
    });

    scrollAnim(".press-card", {
      y: 80,
      opacity: 0,
      stagger: 0.4,
      duration: 0.7,
    });

    // ---------------- Podcasts Section ----------------
    scrollAnim(".sec9-title", {
      y: 40,
      opacity: 0,
      duration: 0.7,
    });

    scrollAnim(".star9", {
      scale: 0.5,
      opacity: 0,
      duration: 1,
    });

    scrollAnim(".podcast-card", {
      y: 80,
      opacity: 0,
      stagger: 0.4,
      duration: 0.7,
    });

    // ---------------- Last Section ----------------
    scrollAnim(".last-title", {
      x: -100,
      opacity: 0,
      duration: 1,
    });

    scrollAnim(".last-text", {
      y: 40,
      opacity: 0,
      duration: 0.7,
    });

    scrollAnim(".last-item", {
      y: 40,
      opacity: 0,
      stagger: 0.4,
      duration: 0.7,
    });

    // ---------------- Footer ----------------
    scrollAnim(".footer-item", {
      x: -80,
      opacity: 0,
      stagger: 0.2,
      duration: 0.7,
    });

    // cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (heroSplit) heroSplit.revert();
    };
  }, [pathname]);

  return null;
};

export default Animations;
