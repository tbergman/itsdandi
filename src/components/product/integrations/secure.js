/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";
import { lineBreaks, rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { globalSlideUp } from "../../../helpers/animations";

const Secure = ({
  setNavbarStyling,
  navBarStyling,
  subMenuStyling,
  setSubMenuStyling,
  windowHeight,
  isDesktop,
  content,
}) => {
  const { header, body, button_text, url } = content;
  const animationControls = useAnimation();
  const lockAnimation = useAnimation();
  const lockVariant = {
    initial: {
      scale: 0,
      originX: "50%",
      originY: "75%",
    },
    animate: {
      scale: 0.5,
      originX: "50%",
      originY: "75%",
      transition: {
        duration: 1,
      },
    },
  };

  const { inView, ref, entry } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      animationControls.start((i) => {
        return globalSlideUp.visible(i);
      });
      lockAnimation.start(() => {
        return lockVariant.animate;
      });
    }
  }, [inView]);

  return (
    <InView
      variant="pages.product.integrations.secure"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <SubInView
        subMenuStyling={subMenuStyling}
        setSubMenuStyling={setSubMenuStyling}
        rootMargin={rootMarginSub(windowHeight)}
      >
        <div
          sx={{
            variant: "grid",
          }}
          className="Secure"
        >
          <div className="Secure__wrapper">
            <div ref={ref} className="Secure__wrapper-text">
              <motion.div
                initial="hidden"
                animate={animationControls}
                variants={globalSlideUp}
                custom={0}
                className="Secure__wrapper-text-header"
              >
                <Styled.h2 className="Secure__wrapper-text-header-text">
                  {header}
                </Styled.h2>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={animationControls}
                variants={globalSlideUp}
                custom={1}
                className="Secure__wrapper-text-body"
              >
                <Styled.p className="Secure__wrapper-text-body-text">
                  {lineBreaks(body)}
                </Styled.p>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={animationControls}
                variants={globalSlideUp}
                custom={2}
                className="Secure__wrapper-link"
              >
                <LearnMoreLink href={url} text={button_text} color="#335AFF" />
              </motion.div>
            </div>
          </div>

          <div className="Secure__graphic">
            <motion.svg
              width="150"
              height="236"
              viewBox="0 0 150 236"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M124 184.004H25V50.5039C25 23.1658 47.1619 1.00391 74.5 1.00391V1.00391C101.838 1.00391 124 23.1658 124 50.5039V105.504"
                stroke="#335AFF"
                stroke-width="2"
              />
              <circle cx="75" cy="160.004" r="75" fill="#FFD93B" />
              <motion.rect
                initial="initial"
                animate={lockAnimation}
                variants={lockVariant}
                x="67"
                y="140.004"
                width="16"
                height="40"
                rx="8"
                fill="white"
              />
            </motion.svg>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Secure;
