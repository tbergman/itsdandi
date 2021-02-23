/** @jsx jsx */
import { useMachine } from "@xstate/react";
import { jsx, Styled } from "theme-ui";
import { scrollToBottom, scrollYPos } from "../../helpers/utils";
import { useRef, useEffect } from "react";

const DemoBtn = ({ variant, demoButtonStatic, isDesktop }) => {
  const ref = useRef(null);

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
