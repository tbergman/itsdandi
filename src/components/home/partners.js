/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { motion, useElementScroll } from "framer-motion";
import { useRef } from "react";

const Partners = () => {
  const ref = useRef();
  const { scrollY } = useElementScroll(ref);
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
    <div
      sx={{
        variant: "pages.home.partners",
      }}
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
          <motion.div className="row1">
            {logos.row1.map((url, i) => (
              <div className="imagewrapper" key={i}>
                <img src={url} alt="" />
              </div>
            ))}
          </motion.div>
          <motion.div className="row2">
            {logos.row1.map((url, i) => (
              <div className="imagewrapper" key={i}>
                <img src={url} alt="" />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;
