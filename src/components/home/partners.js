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
  const { header, logosRow1, logosRow2 } = content;

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
          <div className="rowwrapper">
            <div className="rowcontainer">
              <motion.div
                animate={{
                  x: ["0px", `-${logosRow1.length * 250}px`],
                }}
                transition={{
                  duration: 15,
                  loop: Infinity,
                  ease: "linear",
                }}
                className="row"
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
                {logosRow1.map((url, i) => (
                  <div className="imagewrapper" key={i}>
                    <img src={url.desktop_image} alt="" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="rowwrapper">
            <div className="rowcontainer">
              <motion.div
                animate={{
                  x: ["0px", `-${logosRow2.length * 250}px`],
                }}
                transition={{
                  duration: 9,
                  loop: Infinity,
                  ease: "linear",
                }}
                className="row"
              >
                {logosRow2.map((url, i) => (
                  <div className="imagewrapper" key={i}>
                    <img src={url.desktop_image} alt="" />
                  </div>
                ))}
                {logosRow2.map((url, i) => (
                  <div className="imagewrapper" key={i}>
                    <img src={url.desktop_image} alt="" />
                  </div>
                ))}
                {logosRow2.map((url, i) => (
                  <div className="imagewrapper" key={i}>
                    <img src={url.desktop_image} alt="" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </InView>
  );
};

export default Partners;
