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
import { useState, useEffect,useRef } from "react";
import { useInView } from "react-intersection-observer";

const Partners = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
  content,
}) => {
  const { header, logosRow1, logosRow2 } = content;
  const refRowOne = useRef(null);
  const refRowTwo = useRef(null);
  const [animationWidthRow1, setAnimationWidthRow1] = useState("0px");
  const [animationWidthRow2, setAnimationWidthRow2] = useState("0px");

  useEffect(() => {
    if (refRowOne.current && refRowTwo.current) {
      setAnimationWidthRow1(`-${refRowOne.current.offsetWidth}px`)
      setAnimationWidthRow2(`-${refRowTwo.current.offsetWidth}px`)
    
    }
  }, [refRowOne,refRowTwo])

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
              ref={refRowOne}
                animate={{
                  x: ["0px", animationWidthRow1],
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
              ref={refRowTwo}
                // animate={{
                //   x: ["0px", animationWidthRow2],
                // }}
                // transition={{
                //   duration: 15,
                //   loop: Infinity,
                //   ease: "linear",
                // }}
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
