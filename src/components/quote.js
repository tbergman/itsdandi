/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import InView from "./inview";
import { ReactSVG } from "react-svg";
import { rootMargin, rootMarginSub } from "../helpers/utils";
import SubInView from "./subinview";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { globalSlideUp } from "../helpers/animations";

const Quote = ({
  setNavbarStyling,
  windowHeight,
  bg,
  navBarStyling,
  setSubMenuStyling,
  subMenuStyling,
  content,
  isDesktop,
}) => {
  const { body, desktop_image, mobile_image, name, title } = content;

  const animationControls = useAnimation();

  const { inView, ref, entry } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      animationControls.start((i) => {
        return globalSlideUp.visible(i);
      });
    }
  }, [inView]);

  return (
    <InView
      variant="components.shared.quote"
      navBarStyling={navBarStyling}
      setNavbarStyling={setNavbarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
      bg={bg}
    >
      <SubInView
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={subMenuStyling}
        rootMargin={rootMarginSub(windowHeight)}
      >
        <div
          sx={{
            variant: "grid",
          }}
          className="Quote"
        >
          <div className="Quote__imageWrapper">
            <picture className="Quote__imageWrapper-image">
              <source
                media="(min-width: 800px)"
                srcSet={desktop_image}
              ></source>
              <source srcSet={mobile_image}></source>
              <img src={desktop_image} alt="" />
            </picture>
          </div>
          <div className="Quote__textWrapper">
            <motion.div ref={ref} className="Quote__textWrapper-text">
              <motion.div
                initial="hidden"
                animate={animationControls}
                variants={globalSlideUp}
                custom={0}
                className="Quote__textWrapper-text-quotation"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 8.86538C0 6.07829 0.646281 3.99807 1.93884 2.62473C3.2718 1.25138 4.98848 0.443527 7.0889 0.201172V3.41238C6.11947 3.69513 5.33182 4.24043 4.72593 5.04828C4.12004 5.81574 3.8171 6.98712 3.8171 8.56243V8.86538H7.14949V16.0149H0V8.86538ZM9.8154 16.0149V8.86538C9.8154 6.07829 10.4617 3.99807 11.7542 2.62473C13.0872 1.25138 14.8039 0.443527 16.9043 0.201172V3.41238C15.9349 3.69513 15.1472 4.24043 14.5413 5.04828C13.9354 5.81574 13.6325 6.98712 13.6325 8.56243V8.86538H16.9649V16.0149H9.8154Z"
                    fill="#1A1A1D"
                  />
                </svg>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={animationControls}
                variants={globalSlideUp}
                custom={0}
                className="Quote__textWrapper-text-body"
              >
                <Styled.h3 className="Quote__textWrapper-text-body-text">
                  {body}
                </Styled.h3>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={animationControls}
                variants={globalSlideUp}
                custom={1}
                className="Quote__textWrapper-text-name"
              >
                <Styled.p className="Quote__textWrapper-text-name-text">
                  {name}
                  <br />
                  {title}
                </Styled.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Quote;
