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
        className="Partners"
      >
        <div className="Partners__text">
          <Styled.h2 className="Partners__text-header">{header}</Styled.h2>
        </div>
        <motion.div className="Partners__logoCarousel">
          <div className="Partners__logoCarousel-rowWrapper">
            <div className="Partners__logoCarousel-rowWrapper-container">
              <motion.div
                animate={{
                  x: ["0px", `-${logosRow1.length * 250}px`],
                }}
                transition={{
                  duration: 30,
                  loop: Infinity,
                  ease: "linear",
                }}
                className="Partners__logoCarousel-rowWrapper-container-row"
              >
                {logosRow1.map((url, i) => (
                  <div
                    className="Partners__logoCarousel-rowWrapper-container-row-imageWrapper"
                    key={i}
                  >
                    <picture>
                      <source
                        media="(min-width: 800px)"
                        srcSet={url.desktop_image}
                      ></source>
                      <source srcSet={url.mobile_image}></source>
                      <img
                        className="Partners__logoCarousel-rowWrapper-container-row-imageWrapper-image"
                        src={url.desktop_image}
                        alt=""
                      />
                    </picture>
                  </div>
                ))}
                {logosRow1.map((url, i) => (
                  <div
                    className="Partners__logoCarousel-rowWrapper-container-row-imageWrapper"
                    key={i}
                  >
                    <picture>
                      <source
                        media="(min-width: 800px)"
                        srcSet={url.desktop_image}
                      ></source>
                      <source srcSet={url.mobile_image}></source>
                      <img
                        className="Partners__logoCarousel-rowWrapper-container-row-imageWrapper-image"
                        src={url.desktop_image}
                        alt=""
                      />
                    </picture>
                  </div>
                ))}
                {logosRow1.map((url, i) => (
                  <div
                    className="Partners__logoCarousel-rowWrapper-container-row-imageWrapper"
                    key={i}
                  >
                    <picture>
                      <source
                        media="(min-width: 800px)"
                        srcSet={url.desktop_image}
                      ></source>
                      <source srcSet={url.mobile_image}></source>
                      <img
                        className="Partners__logoCarousel-rowWrapper-container-row-imageWrapper-image"
                        src={url.desktop_image}
                        alt=""
                      />
                    </picture>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="Partners__logoCarousel-rowWrapper">
            <div className="Partners__logoCarousel-rowWrapper-container">
              <motion.div
                animate={{
                  x: ["0px", `-${logosRow2.length * 250}px`],
                }}
                transition={{
                  duration: 9,
                  loop: Infinity,
                  ease: "linear",
                }}
                className="Partners__logoCarousel-rowWrapper-container-row"
              >
                {logosRow2.map((url, i) => (
                  <div
                    className="Partners__logoCarousel-rowWrapper-container-row-imageWrapper"
                    key={i}
                  >
                    <picture>
                      <source
                        media="(min-width: 800px)"
                        srcSet={url.desktop_image}
                      ></source>
                      <source srcSet={url.mobile_image}></source>
                      <img
                        className="Partners__logoCarousel-rowWrapper-container-row-imageWrapper"
                        src={url.desktop_image}
                        alt=""
                      />
                    </picture>
                  </div>
                ))}
                {logosRow2.map((url, i) => (
                  <div
                    className="Partners__logoCarousel-rowWrapper-container-row-imageWrapper"
                    key={i}
                  >
                    <picture>
                      <source
                        media="(min-width: 800px)"
                        srcSet={url.desktop_image}
                      ></source>
                      <source srcSet={url.mobile_image}></source>
                      <img
                        className="Partners__logoCarousel-rowWrapper-container-row-imageWrapper"
                        src={url.desktop_image}
                        alt=""
                      />
                    </picture>
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
