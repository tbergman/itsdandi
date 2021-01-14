/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { lineBreaks, rootMargin, rootMarginSub } from "../../../helpers/utils";
import InView from "../../inview";
import SubInView from "../../subinview";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { globalSlideUp } from "../../../helpers/animations";

const WhyMeasure = ({
  windowHeight,
  setNavbarStyling,
  navBarStyling,
  subMenuStyling,
  setSubMenuStyling,
  isDesktop,
  content,
}) => {
  const { categories, header, body } = content;

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
      variant="pages.product.measure.whymeasure"
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
          className="WhyMeasure"
        >
          <div ref={ref} className="WhyMeasure__top">
            <motion.div
              initial="hidden"
              animate={animationControls}
              variants={globalSlideUp}
              custom={0}
              className="WhyMeasure__top-section1"
            >
              <Styled.h2 className="WhyMeasure__top-section1-header">
                {header}
              </Styled.h2>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={animationControls}
              variants={globalSlideUp}
              custom={1}
              className="WhyMeasure__top-section2"
            >
              <Styled.p className="WhyMeasure__top-section2-body">
                {lineBreaks(body)}
              </Styled.p>
            </motion.div>
          </div>
          <div className="WhyMeasure__categories">
            {categories.map((category, i) => (
              <div className="WhyMeasure__categories-category" key={i}>
                <div className="WhyMeasure__categories-category-divider">
                  <span
                    sx={{
                      bg: category.fields.hexcode,
                    }}
                  ></span>
                </div>
                <div className="WhyMeasure__categories-category-title">
                  <Styled.p>{category.fields.title}</Styled.p>
                </div>
                <div className="WhyMeasure__categories-category-items">
                  {category.fields.item.map((item, i) => (
                    <div
                      className="WhyMeasure__categories-category-items-item"
                      key={i}
                    >
                      <Styled.p className="WhyMeasure__categories-category-items-item-text">
                        {item.text}
                      </Styled.p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default WhyMeasure;
