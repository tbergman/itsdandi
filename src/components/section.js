/** @jsx jsx */
import { jsx } from "theme-ui";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useMachine } from "@xstate/react";
import { slideUp__machine } from "../machines/slideup";

const Section = ({ variant, shouldSlideUp, styling, children }) => {
  const ref = useRef(null);
  const [state, send] = useMachine(slideUp__machine);

  useEffect(() => {
    if (shouldSlideUp) {
      gsap.registerPlugin(ScrollTrigger);
      send({
        type: "SLIDE_UP",
        payload: {
          gsap,
          ref,
        },
      });
    }
  }, []);
  return (
    <div
      ref={ref}
      sx={{
        variant,
        ...styling,
      }}
    >
      {children}
    </div>
  );
};

export default Section;
