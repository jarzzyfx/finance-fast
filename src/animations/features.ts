import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
export const ticker = () => {
  const tickTl = gsap.timeline({
    repeat: -1,
    scrollTrigger: {
      trigger: ".showcase",
      start: "20% bottom",
      toggleActions: "play reverse play reverse",
    },
  });
  tickTl.to(".features", {
    y: "-10%",
    duration: 0.5,
    ease: "elastic.inOut",
  });
  tickTl.to(".features", {
    y: "-20%",
    duration: 0.5,
    ease: "elastic.inOut",
  });
  tickTl.to(".features", {
    y: "-30%",
    duration: 0.5,
    ease: "elastic.inOut",
  });
  tickTl.to(".features", {
    y: "-40%",
    duration: 0.5,
    ease: "elastic.inOut",
  });
  tickTl.to(".features", {
    y: "-50%",
    duration: 0.5,
    ease: "elastic.inOut",
  });
  tickTl.to(".features", {
    y: "-60%",
    duration: 0.5,
    ease: "elastic.inOut",
  });
  tickTl.to(".features", {
    y: "-70%",
    duration: 0.5,
    ease: "elastic.inOut",
  });
  tickTl.to(".features", {
    y: "-80%",
    duration: 0.5,
    ease: "elastic.inOut",
  });
  tickTl.to(".features", {
    y: "-90%",
    duration: 0.5,
    ease: "elastic.inOut",
  });
  tickTl.to(".features", {
    y: "-100%",
    duration: 0.5,
    ease: "elastic.inOut",
  });
};
