/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import { rootMargin, rootMarginSub } from "../../../helpers/utils";
import InView from "../../inview";
import SubInView from "../../subinview";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { globalSlideUp } from "../../../helpers/animations";

const TextBlock = ({
  content,
  styling,
  setNavbarStyling,
  subMenuStyling,
  setSubMenuStyling,
  navBarStyling,
  windowHeight,
  isDesktop,
}) => {
  const { header, sections } = content;

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
      variant="pages.values.deijourney.textblock"
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
            ...styling,
          }}
        >
          <div
            ref={ref}
            className="TextBlock"
            sx={{
              variant: "grid",
            }}
          >
            <motion.div
              initial="hidden"
              animate={animationControls}
              variants={globalSlideUp}
              custom={0}
              className="TextBlock__header"
            >
              <Styled.h2 className="TextBlock__header-text">{header}</Styled.h2>
            </motion.div>

            <div className="TextBlock__textWrapper">
              {sections.map((section, i) => (
                <motion.div
                  initial="hidden"
                  animate={animationControls}
                  variants={globalSlideUp}
                  custom={i + 1}
                  sx={{
                    mb: [3],
                  }}
                  className="TextBlock__textWrapper-section"
                  key={i}
                >
                  <Styled.p className="TextBlock__textWrapper-section-title">
                    {section.title}
                  </Styled.p>
                  <Styled.p className="TextBlock__textWrapper-section-body">
                    {section.body}
                  </Styled.p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default TextBlock;
