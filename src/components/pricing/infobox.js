/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../learnmorelink";
import { motion, useAnimation } from "framer-motion";
import { InfoBox__fadeIn } from "../../helpers/animations/pricing";
import { useEffect, useRef } from "react";

const InfoBox = ({ open, send, isDesktop, content }) => {
  const animationControls = useAnimation();
  const ref = useRef(null);
  const { body, button1, button2 } = content;

  useEffect(() => {
    // mobile modal functionality
    if (!isDesktop) {
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    }
  }, [open]);

  const handleClickOutside = (event) => {
    if (open && ref.current && !ref.current.contains(event.target)) {
      send("CLOSE");
    }
  };

  useEffect(() => {
    if (open) {
      animationControls.start("animate");
    } else {
      animationControls.start("initial");
    }
  }, [open]);
  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={animationControls}
      variants={InfoBox__fadeIn}
      className="infoBox"
    >
      <Styled.p className="infoBox__body">{body}</Styled.p>
      <div className="infoBox__links">
        {button1.url && button1.text && (
          <div className="infoBox__link">
            <LearnMoreLink
              href={button1.url}
              color="#F9D2FF"
              text={button1.text}
            />
          </div>
        )}
        {button2.url && button2.text && (
          <div className="infoBox__link">
            <LearnMoreLink
              href={button2.url}
              color="#F9D2FF"
              text={button2.text}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default InfoBox;
