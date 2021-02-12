/** @jsx jsx */
import { useMachine } from "@xstate/react";
import { jsx, Styled } from "theme-ui";
import { scrollToBottom } from "../../helpers/utils";
import { DemoBtn__machine } from "../../machines/demobtn";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const DemoBtn = ({ variant, demoButtonStatic }) => {
  const [state, send] = useMachine(DemoBtn__machine);
  const ref = useRef(null);

  useEffect(() => {}, []);

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
