// components/UI/SplitTextGSAP.tsx
import React, { useEffect, useRef } from "react";

type SplitTextGSAPProps = {
  text: string;
  type?: string; 
  animation?: "chars" | "words" | "lines";
  className?: string;
  animationProps?: Record<string, any>;
};

const defaultAnims = {
  chars: {
    x: 120,
    opacity: 0,
    duration: 0.7,
    ease: "power4.out",
    stagger: 0.04,
  },
  words: {
    y: -80,
    opacity: 0,
    rotation: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
    stagger: 0.15,
  },
  lines: {
    rotationX: -90,
    transformOrigin: "50% 50% -60px",
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.18,
  },
};

export default function SplitTextGSAP({
  text,
  type = "words,chars,lines",
  animation = "words",
  className = "",
  animationProps = {},
}: SplitTextGSAPProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const splitInstance = useRef<any>(null);
  const animInstance   = useRef<any>(null);

  useEffect(() => {
    let ctx = true;

    (async () => {
      if (!textRef.current) return;

      // 1. Import gsap default
      const gsapModule = await import("gsap");
      const gsap        = gsapModule.default || gsapModule.gsap;

      // 2. Import SplitText as named export
      const { SplitText } = await import("gsap/SplitText");

      // 3. Register plugin
      gsap.registerPlugin(SplitText);

      // 4. Clean up previous instances
      splitInstance.current?.revert();
      animInstance.current?.revert();

      // 5. Create new SplitText
      splitInstance.current = new SplitText(textRef.current, {
        type,
        linesClass: "split-line",
      });

      // 6. Run animation
      const targets = splitInstance.current[animation];
      const finalProps = {
        ...defaultAnims[animation],
        ...animationProps,
      };
      animInstance.current = gsap.from(targets, finalProps);
    })();

    return () => {
      ctx = false;
      splitInstance.current?.revert();
      animInstance.current?.revert();
    };
  // Re-run if these props change
  }, [text, type]);

  return (
    <div ref={textRef} className={className}>
      {text}
    </div>
  );
}
