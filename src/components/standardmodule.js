/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { lineBreaks } from "../helpers/utils";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useMachine } from "@xstate/react";
import { slideUp__machine } from "../machines/slideup";

const StandardModule = ({ header, body }) => {
  const ref = useRef(null);
  const [state, send] = useMachine(slideUp__machine);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    send({
      type: "SLIDE_UP",
      payload: {
        gsap,
        ref,
      },
    });
  }, []);

  return (
    <div
      sx={{
        variant: "components.standardModule.twoCol",
      }}
      ref={ref}
      className="StandardModule"
    >
      <div className="StandardModule__section1 slideUp">
        <Styled.h2 className="StandardModule__header">{header}</Styled.h2>
      </div>
      <div className="StandardModule__section2 slideUp">
        <Styled.p className="StandardModule__body">{lineBreaks(body)}</Styled.p>
      </div>
    </div>
  );
};

export default StandardModule;
