/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AnimatingCircle = ({ fill }) => {
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tween = gsap.fromTo(
      circleRef.current,
      {
        scale: 0,
        transformOrigin: "50% 50%",
      },
      {
        scale: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: circleRef.current,
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      // cleaning up
      tween.kill();
    };
  }, []);

  return (
    <svg viewBox="0 0 100 100">
      <circle ref={circleRef} cx="50" cy="50" r="50" fill={fill} />
    </svg>
  );
};

export default AnimatingCircle;
