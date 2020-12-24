/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import {
  motion,
  useViewportScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef } from "react";
import InView from "../inview";
import theme from "../../../theme";
import { rootMargin } from "../../helpers/utils";
import { useState, useEffect } from "react";

const Partners = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
}) => {
  const ref = useRef();
  const { scrollYProgress } = useViewportScroll();
  const [loopIdx, setLoopIdx] = useState(0);
  const time = 500;

  useEffect(() => {
    const next = (loopIdx + 1) % logos.length;
    const id = setTimeout(() => setLoopIdx(next), time);
    return () => clearTimeout(id);
  }, [loopIdx]);

  const logos = [
    "/assets/images/logos/11.png",
    "/assets/images/logos/21.png",
    "/assets/images/logos/41.png",
    "/assets/images/logos/successfactor-logo1.png",
    "/assets/images/logos/Ultimate_Software_UltiPro_Logo_Process1.png",
    "/assets/images/logos/Workday_Logo1.png",
  ];
  return (
    <InView
      variant="pages.home.partners"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h2>Serious about change? You're in good company. </Styled.h2>
        </div>
        <motion.div className="carousel">
          <motion.div
            animate={{
              x: ["0%", "-90%"],
            }}
            transition={{
              duration: 8,
              loop: Infinity,
              ease: "linear",
            }}
            className="row1"
          >
            {logos.map((url, i) => (
              <div className="imagewrapper" key={i}>
                <img src={url} alt="" />
              </div>
            ))}
            {logos.map((url, i) => (
              <div className="imagewrapper" key={i}>
                <img src={url} alt="" />
              </div>
            ))}
          </motion.div>

          <motion.div
            animate={{
              x: ["0%", "-90%"],
            }}
            transition={{
              duration: 4,
              loop: Infinity,
              ease: "linear",
            }}
            className="row2"
          >
            {logos.map((url, i) => (
              <div className="imagewrapper" key={i}>
                <img src={url} alt="" />
              </div>
            ))}
            {logos.map((url, i) => (
              <div className="imagewrapper" key={i}>
                <img src={url} alt="" />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </InView>
  );
};

export default Partners;
