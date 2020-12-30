/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import {
  motion,
  useViewportScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import InView from "../inview";
import theme from "../../../theme";
import { rootMargin } from "../../helpers/utils";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Partners = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
  content,
}) => {
  const { header, logosRow1 } = content;
  const { scrollYProgress } = useViewportScroll();
  const [loopIdx, setLoopIdx] = useState(0);
  const time = 500;

  useEffect(() => {
    const next = (loopIdx + 1) % logosRow1.length;
    const id = setTimeout(() => setLoopIdx(next), time);
    return () => clearTimeout(id);
  }, [loopIdx]);

  // const logos = [
  //   "/assets/images/logos/11.png",
  //   "/assets/images/logos/21.png",
  //   "/assets/images/logos/41.png",
  //   "/assets/images/logos/successfactor-logo1.png",
  //   "/assets/images/logos/Ultimate_Software_UltiPro_Logo_Process1.png",
  //   "/assets/images/logos/Workday_Logo1.png",
  // ];
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
          <Styled.h2>{header}</Styled.h2>
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
            {logosRow1.map((url, i) => (
              <div className="imagewrapper" key={i}>
                <img src={url.desktop_image} alt="" />
              </div>
            ))}
            {logosRow1.map((url, i) => (
              <div className="imagewrapper" key={i}>
                <img src={url.desktop_image} alt="" />
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
            {logosRow1.map((url, i) => (
              <div className="imagewrapper" key={i}>
                <img src={url.desktop_image} alt="" />
              </div>
            ))}
            {logosRow1.map((url, i) => (
              <div className="imagewrapper" key={i}>
                <img src={url.desktop_image} alt="" />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </InView>
  );
};

export default Partners;
