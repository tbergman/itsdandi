/** @jsx jsx */
import { useMachine } from "@xstate/react";
import { jsx, Styled } from "theme-ui";
import { scrollToBottom } from "../../helpers/utils";
import { DemoBtn__machine } from "../../machines/demobtn";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import useScrollPosition from "@react-hook/window-scroll";

const DemoBtn = ({ variant, demoButtonStatic }) => {
  const [state, send] = useMachine(DemoBtn__machine);
  const scrollThreshold = 400;
  const ref = useRef(null);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const aboveThreshold = Math.abs(currPos.y) >= scrollThreshold;

      if (state.matches("hidden") && aboveThreshold) {
        send({
          type: "SHOW",
          payload: {
            gsap,
            ref: ref,
          },
        });
      } else if (state.matches("visible") && !aboveThreshold) {
        send({
          type: "HIDE",
          payload: {
            gsap,
            ref: ref,
          },
        });
      }
    },

    [state],
    null,
    true,
    250,
    null
  );

  switch (variant) {
    case "yellow": {
      return (
        <div ref={ref} className="item demobtn">
          <Styled.p
            className="demobtn-text"
            onClick={() =>
              scrollToBottom(window, document.body.scrollHeight, isDesktop)
            }
          >
            Request a demo
          </Styled.p>
        </div>
      );
    }
    case "blue": {
      return <div></div>;
    }
  }
};

export default DemoBtn;
