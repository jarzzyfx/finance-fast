import gsap from "gsap";

const textTL = gsap.timeline({ delay: 0.2 });
const triangleTL = gsap.timeline({ delay: 0.2, repeat: -1, repeatDelay: 3.5 });
export function defaultState() {
  //
  triangleTL.pause();
  triangleTL.to("#triangle1", {
    x: 10,
    duration: 0.5,
    ease: "power2.inOut",
  });
  triangleTL.to("#triangle2", {
    x: -10,
    opacity: 0,
    duration: 0.5,
    ease: "power2.inOut",
  });
  triangleTL.to("#triangle1", {
    x: 0,
    duration: 0.5,
    ease: "power2.inOut",
  });
  triangleTL.to("#triangle2", {
    x: 0,
    opacity: 1,
    duration: 0.5,
    ease: "power2.inOut",
  });

  textTL.to("#logo_text", {
    x: 5,
    duration: 0.6,
    ease: "power2.inOut",
  });
  textTL.to("#logo_text", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    onComplete: () => {
      triangleTL.play();
    },
  });
}
export function hoverState() {
  textTL.to("#logo_text", {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.inOut",
  });
  triangleTL.pause();
}
export function clickState() {}
