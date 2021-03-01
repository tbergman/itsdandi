/** @jsx jsx */
import { useMachine } from "@xstate/react";
import { jsx, Styled } from "theme-ui";
import { scrollToBottom } from "../../helpers/utils";
import { useRef, useEffect, useState } from "react";
import { MobileDemoBtn__machine } from "../../machines/demobtn";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { gsap } from "gsap";

const MobileDemoBtn = ({ menuOpen, staticDemoBtn }) => {
  const [state, send] = useMachine(MobileDemoBtn__machine);
  const [wasClosed, setWasClosed] = useState(false);
  const ref = useRef(null);
  const scrollThreshold = 200;

  // initial load
  useEffect(() => {
    if (state.matches("idle") && staticDemoBtn) {
      send({
        type: "SHOW",
        payload: {
          gsap,
          ref,
        },
      });
    }

    return () => {
      //
    };
  }, []);

  // menuOpen
  useEffect(() => {
    if (state.matches("hidden") && menuOpen) {
      send({
        type: "SHOW",
        payload: {
          gsap,
          ref,
          previouslyClosed: true,
        },
      });
    } else if (
      state.matches("visible") &&
      !menuOpen &&
      state.context.previouslyClosed
    ) {
      send({
        type: "HIDE",
        payload: {
          gsap,
          ref,
          previouslyClosed: false,
        },
      });
    }
  }, [menuOpen]);

  // scrollListener
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!staticDemoBtn && !menuOpen) {
        if (currPos.y > scrollThreshold) {
          send({
            type: "SHOW",
            payload: {
              gsap,
              ref,
            },
          });
        } else {
          send({
            type: "HIDE",
            payload: {
              gsap,
              ref,
            },
          });
        }
      }
    },
    [state],
    null,
    true,
    250,
    null
  );

  return (
    <div ref={ref} className="mobileDemoBtn">
      <Styled.p
        className="mobileDemoBtn-text"
        onClick={() => scrollToBottom(window, false)}
      >
        Request a demo
      </Styled.p>
    </div>
  );
};

export default MobileDemoBtn;
