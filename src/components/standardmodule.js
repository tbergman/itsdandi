/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { lineBreaks } from "../helpers/utils";

const StandardModule = ({ header, body }) => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.to(ref.current.querySelectorAll(".slideUp"), {
      opacity: 1,
      y: 0,
      duration: 0.4,
      scrollTrigger: {
        trigger: ref.current,
        once: true,
      },
    });
  }, []);

  return (
    <div ref={ref} className="WhyMeasure__top">
      <div className="WhyMeasure__top-section1 slideUp">
        <Styled.h2 className="WhyMeasure__top-section1-header">
          {header}
        </Styled.h2>
      </div>
      <div className="WhyMeasure__top-section2 slideUp">
        <Styled.p className="WhyMeasure__top-section2-body">
          {lineBreaks(body)}
        </Styled.p>
      </div>
    </div>
  );
};

export default StandardModule;
