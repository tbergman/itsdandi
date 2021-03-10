/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import devices from "../../../helpers/devices";
import { lineBreaks, rootMargin, rootMarginSub } from "../../../helpers/utils";

import { useEffect, useRef } from "react";
import { useMachine } from "@xstate/react";
import { slideUp__machine } from "../../../machines/slideup";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Thoughtful = ({ content }) => {
  const ref = useRef(null);
  const [state, send] = useMachine(slideUp__machine);
  const {
    header,
    body_section1,
    body_section2,
    link_description,
    links,
  } = content;

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
    <div ref={ref} className="Thoughtful">
      <div className="Thoughtful__section1">
        <div className="Thoughtful__section1-header slideUp">
          <Styled.h2 className="Thoughtful__section1-header-text">
            {header}
          </Styled.h2>
        </div>
        <div className="Thoughtful__section1-body slideUp">
          <Styled.p className="Thoughtful__section1-body-text">
            {lineBreaks(body_section1)}
          </Styled.p>
        </div>
      </div>
      <div className="Thoughtful__section2">
        <div className="Thoughtful__section2-body slideUp">
          <Styled.p className="Thoughtful__section2-body-text">
            {lineBreaks(body_section2)}
          </Styled.p>
        </div>
        <div className="Thoughtful__section2-team slideUp">
          <div className="Thoughtful__section2-team-divider">
            <span />
          </div>
          <div className="Thoughtful__section2-team-header">
            <Styled.p className="Thoughtful__section2-team-header-text">
              {link_description}
            </Styled.p>
          </div>
          <div className="Thoughtful__section2-team-links">
            {links.map((link, i) => (
              <LearnMoreLink
                key={i}
                href={link.url}
                text={link.button_text}
                color="#335AFF"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thoughtful;
