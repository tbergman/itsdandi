/** @jsx jsx */
import { useMachine } from "@xstate/react";
import { jsx, Styled } from "theme-ui";
import { scrollToBottom } from "../../helpers/utils";
import { useRef, useEffect } from "react";
import { MobileDemoBtn__machine } from "../../machines/demobtn";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { gsap } from "gsap";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

const MobileDemoBtn = ({ menuOpen, staticDemoBtn }) => {
  const [state, send] = useMachine(MobileDemoBtn__machine);
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
    if (state.matches("visible") && menuOpen) {
      // disable scroll on body but not on mobile menu
      disableBodyScroll(document.body, {
        allowTouchMove: (el) => el.tagName === "NAV",
      });
      send({
        type: "HIDE",
        payload: {
          gsap,
          ref,
        },
      });
    } else {
      clearAllBodyScrollLocks(document.body);
    }
    return () => {
      clearAllBodyScrollLocks(document.body);
    };
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
    [],
    null,
    true,
    250,
    null
  );

  return (
    <div ref={ref} className="mobileDemoBtn">
      <Styled.p
        className="mobileDemoBtn-text"
        onClick={() =>
          scrollToBottom(window, document.body.scrollHeight, false)
        }
      >
        Request a demo
      </Styled.p>
    </div>
  );
};

export default MobileDemoBtn;
