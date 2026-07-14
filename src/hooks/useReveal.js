import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useReveal - a small, consistent scroll-reveal used across the site.
 *
 * Pass `stagger: true` to animate each direct child of the ref
 * one after another (great for grids / lists). Otherwise the whole
 * element fades/slides in as one block.
 */
export function useReveal({
  y = 40,
  duration = 1,
  stagger = 0,
  start = "top 85%",
  delay = 0,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      gsap.set(el.children.length && stagger ? el.children : el, {
        opacity: 1,
        y: 0,
      });
      return;
    }

    const targets = stagger ? el.children : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          stagger: stagger ? (typeof stagger === "number" ? stagger : 0.12) : 0,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}

export default useReveal;
