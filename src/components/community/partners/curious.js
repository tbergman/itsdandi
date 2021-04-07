/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";
import { lineBreaks, rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { globalSlideUp } from "../../../helpers/animations";

const Curious = ({
  setNavbarStyling,
  navBarStyling,
  subMenuStyling,
  setSubMenuStyling,
  windowHeight,
  isDesktop,
  content,
}) => {
  const { header1, body1, header2, body2, button_text, url } = content;
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
      variant="pages.community.partners.curious"
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
          ref={ref}
        >
          <div className="row1">
            <motion.div
              initial="hidden"
              animate={animationControls}
              variants={globalSlideUp}
              custom={0}
              className="section1"
            >
              <Styled.h2>{header1}</Styled.h2>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={animationControls}
              variants={globalSlideUp}
              custom={1}
              className="section2"
            >
              <Styled.p>
                Curious about working with a Dandi Marketplace Partner? Contact
                us at{" "}
                <a
                  style={{
                    textDecoration: "none",
                  }}
                  href="mailto:marketplace@itsdandi.com"
                >
                  marketplace@itsdandi.com
                </a>
                . We’re happy to connect you to our partners, even if you’re not
                a Dandi client.
              </Styled.p>
            </motion.div>
          </div>

          <div className="row2">
            <motion.div
              initial="hidden"
              animate={animationControls}
              variants={globalSlideUp}
              custom={3}
              className="section1"
            >
              <Styled.h2>{header2}</Styled.h2>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={animationControls}
              variants={globalSlideUp}
              custom={4}
              className="section2"
            >
              <Styled.p>{lineBreaks(body2)}</Styled.p>
              <div className="link">
                <LearnMoreLink href={url} text={button_text} color="#335AFF" />
              </div>
            </motion.div>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Curious;
