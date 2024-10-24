import gsap from "gsap";

export const toggleNav = (state: boolean) => {
  if (state) {
    gsap.to(".mobile_nav", {
      x: 0,
      duration: 1,
      ease: "circ.inOut",
    });
  } else {
    gsap.to(".mobile_nav", {
      x: "100%",
      duration: 1,
      ease: "circ.inOut",
    });
  }
};
