/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import InView from "../inview";
import theme from "../../../theme";

const Partners = ({ setNavbarStyling, windowHeight, navBarStyling }) => {
  const ref = useRef();
  const { scrollYProgress } = useViewportScroll();

  const logos = {
    row1: [
      "/assets/images/logos/11.png",
      "/assets/images/logos/21.png",
      "/assets/images/logos/41.png",
      "/assets/images/logos/successfactor-logo1.png",
      "/assets/images/logos/Ultimate_Software_UltiPro_Logo_Process1.png",
      "/assets/images/logos/Workday_Logo1.png",
    ],
  };
  return (
    <InView
      variant="pages.home.partners"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={`0px 0px -${windowHeight - 94}px 0px`}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h2>Serious about change? You're in good company. </Styled.h2>
        </div>
        <motion.div ref={ref} className="carousel">
          <motion.div
            style={{
              translateX: useTransform(
                scrollYProgress,
                [0, 0.4, 0.7, 1],
                [0, 0, -500, 0]
              ),
            }}
            className="row1"
          >
            {logos.row1.map((url, i) => (
              <div className="imagewrapper" key={i}>
                <img src={url} alt="" />
              </div>
            ))}
          </motion.div>
          <motion.div
            style={{
              translateX: useTransform(
                scrollYProgress,
                [0, 0.4, 0.7, 1],
                [0, 0, 150, 0]
              ),
            }}
            className="row2"
          >
            {logos.row1.map((url, i) => (
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
