/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import { framer, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { globalSlideUp } from "../../../helpers/animations";

const TextModule = ({ header, body, link }) => {
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
    <div ref={ref} className="TextModules__wrapper-module">
      <div className="TextModules__wrapper-module-divider">
        <span />
      </div>
      <div className="TextModules__wrapper-module-section1">
        <motion.div
          initial="hidden"
          animate={animationControls}
          variants={globalSlideUp}
          custom={0}
          className="TextModules__wrapper-module-section1-header"
        >
          <Styled.h2 className="TextModules__wrapper-module-section1-header-text">
            {header}
          </Styled.h2>
        </motion.div>
      </div>
      <div className="TextModules__wrapper-module-section2">
        <motion.div
          initial="hidden"
          animate={animationControls}
          variants={globalSlideUp}
          custom={0}
          className="TextModules__wrapper-module-section2-body"
        >
          <Styled.p className="TextModules__wrapper-module-section2-body-text">
            {body}
          </Styled.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={animationControls}
          variants={globalSlideUp}
          custom={1}
          className="TextModules__wrapper-module-section2-linkSection"
        >
          <Styled.p className="TextModules__wrapper-module-section2-linkSection-description">
            {link.description}
          </Styled.p>
          <div className="TextModules__wrapper-module-section2-linkSection-link">
            <LearnMoreLink href={link.url} text={link.text} color="#335AFF" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TextModule;
