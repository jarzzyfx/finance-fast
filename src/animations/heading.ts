import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
export const headingReveal = (
  smallHeading: string,
  bigHeading: string,
  triggerEl: string,
  description?: string
) => {
  const headingTl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerEl,
      start: "20% bottom",
    },
  });
  headingTl.to(smallHeading, {
    y: "100%",
    duration: 1,
    ease: "circ.inOut",
  });
  headingTl.to(bigHeading, {
    y: "200%",
    rotate: "25deg",
    duration: 1.5,
    stagger: 0.3,
    ease: "power2.inOut",
  });
  headingTl.to(`${description}`, {
    opacity: 1,
    duration: 1,
    ease: "circ.inOut",
  });
};
