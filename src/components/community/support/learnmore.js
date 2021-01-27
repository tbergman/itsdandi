/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";
import { lineBreaks, rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { globalSlideUp } from "../../../helpers/animations";
import { motion, useAnimation } from "framer-motion";

const LearnMore = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  subMenuStyling,
  setSubMenuStyling,
  isDesktop,
  content
}) => {
  const  {header,body,button_text,url} = content;
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
      variant="pages.community.support.learnmore"
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
        >
          <div className="imagewrapper">
            <picture>
              <source
                media="(min-width: 800px)"
                srcSet="/assets/images/community/support/image43-desktop.png"
              ></source>
              <source srcSet="/assets/images/supportimage.png"></source>
              <img src="/assets/images/supportimage.png" alt="" />
            </picture>
          </div>

          <motion.div
            initial="hidden"
            animate={animationControls}
            variants={globalSlideUp}
            custom={0}
            className="text"
          >
            <Styled.h2>{header}</Styled.h2>
            <Styled.p>
              {lineBreaks(body)}
            </Styled.p>
            <div className="link">
              <LearnMoreLink href={url} text={button_text} color="#1A1A1D" />
            </div>
          </motion.div>
        </div>
      </SubInView>
    </InView>
  );
};

export default LearnMore;
