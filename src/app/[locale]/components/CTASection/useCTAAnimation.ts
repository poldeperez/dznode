import { useRef } from "react";
import { gsap, useGSAP } from "@/utils/gsap";

export function useCTAAnimation() {
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (ctaRef.current) {
      const heading = ctaRef.current.querySelector("h2");
      const paragraph = ctaRef.current.querySelector("p");
      const button = ctaRef.current.querySelector(".button-link");


      gsap.to(heading, {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
                trigger: ".ctaSection",
                start: "top 75%",
                pinSpacing: true }
      });
      
      gsap.to(paragraph, {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
                trigger: ".ctaSection",
                start: "top 75%",
                pinSpacing: true }
      });

      gsap.to(button, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        delay: 0.5,
        scrollTrigger: {
                trigger: ".ctaSection",
                start: "top 75%",
                pinSpacing: true }
      });
    }
  });

  return { ctaRef };
}