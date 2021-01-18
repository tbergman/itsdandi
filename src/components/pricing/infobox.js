/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../learnmorelink";
import { motion, useAnimation } from "framer-motion";
import { InfoBox__fadeIn } from "../../helpers/animations/pricing";
import { useEffect, useRef } from "react";

const InfoBox = ({ open, body, url, buttonText, send, isDesktop }) => {
  const animationControls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    // mobile modal functionality
    if (!isDesktop) {
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        console.log("cleaning up!");
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
      className={`Table__body-row-grid-item-infoBox`}
    >
      <Styled.p className="Table__body-row-grid-item-infoBox-body">
        {body}
      </Styled.p>
      <div className="Table__body-row-grid-item-infoBox-link">
        <LearnMoreLink href={url} color="#F9D2FF" text={buttonText} />
      </div>
    </motion.div>
  );
};

export default InfoBox;
