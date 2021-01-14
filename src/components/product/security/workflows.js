/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import { lineBreaks, rootMargin, rootMarginSub } from "../../../helpers/utils";
import InView from "../../inview";
import SubInView from "../../subinview";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { globalSlideUp } from "../../../helpers/animations";

const Workflows = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  subMenuStyling,
  setSubMenuStyling,
  isDesktop,
  content,
}) => {
  const { header, body, items } = content;
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
      variant="pages.product.security.workflows"
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
          ref={ref}
          sx={{
            variant: "grid",
          }}
          className="Workflows"
        >
          <div className="Workflows__section1">
            <div className="Workflows__section1-toptext">
              <motion.div
                initial="hidden"
                animate={animationControls}
                variants={globalSlideUp}
                custom={0}
                className="Workflows__section1-toptext-header"
              >
                <Styled.h2 className="Workflows__section1-toptext-header-text">
                  {header}
                </Styled.h2>
              </motion.div>
              <motion.div
                initial="hidden"
                animate={animationControls}
                variants={globalSlideUp}
                custom={1}
                className="Workflows__section1-toptext-body"
              >
                <Styled.p className="Workflows__section1-toptext-body-text">
                  {lineBreaks(body)}
                </Styled.p>
              </motion.div>
            </div>
          </div>
          <div className="Workflows__section2">
            <motion.div className="Workflows__section2-categories">
              {items.map((category, i) => (
                <motion.div
                  initial="hidden"
                  animate={animationControls}
                  variants={globalSlideUp}
                  custom={2 + i}
                  className="Workflows__section2-categories-category"
                  key={i}
                >
                  <div className="Workflows__section2-categories-category-header">
                    <Styled.p className="Workflows__section2-categories-category-header-text">
                      {category.title}
                    </Styled.p>
                  </div>
                  <div className="Workflows__section2-categories-category-body">
                    <Styled.p className="Workflows__section2-categories-category-body-text">
                      {category.body}
                    </Styled.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="Workflows__graphic">
            <ReactSVG src="/assets/svgs/product/security/illustration_03.4.2.svg" />
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Workflows;
