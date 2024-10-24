import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
export function ShowPhone(
  element: [string, string, string, string],
  trigger: string
) {
  // timeline base settings
  const showphoneTl = gsap.timeline({
    delay: 0.1,
    repeat: -1,
    repeatDelay: 2,
    scrollTrigger: {
      trigger: trigger,
      start: "top bottom",
    },
  });

  // timeline implementations

  showphoneTl.to(element[0], {
    y: "-180px",
    duration: 2.5,
    ease: "power2.inOut",
    delay: 0.1,
  });
  showphoneTl.to(element[3], {
    y: "0px",
    duration: 1,
    ease: "power2.inOut",
    delay: 0.1,
  });
  showphoneTl.to(element[1], {
    y: "-180px",
    duration: 2.5,
    ease: "power2.inOut",
    delay: 0.1,
  });
  showphoneTl.to(element[0], {
    y: "0px",
    duration: 1,
    ease: "power2.inOut",
    delay: 0.1,
  });
  showphoneTl.to(element[2], {
    y: "-180px",
    duration: 2.5,
    ease: "power2.inOut",
    delay: 0.1,
  });
  showphoneTl.to(element[1], {
    y: "0px",
    duration: 1,
    ease: "power2.inOut",
    delay: 0.1,
  });
  showphoneTl.to(element[3], {
    y: "-180px",
    duration: 2.5,
    ease: "power2.inOut",
    delay: 0.1,
  });
  showphoneTl.to(element[2], {
    y: "0px",
    duration: 1,
    ease: "power2.inOut",
    delay: 0.1,
  });
}
