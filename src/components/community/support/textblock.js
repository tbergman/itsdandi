/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { globalSlideUp } from "../../../helpers/animations";
import { motion, useAnimation } from "framer-motion";

const TextBlock = ({ title, description, listTitle, listItems }) => {
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
    <div ref={ref} className="textblock">
      <div className="divider">
        <span></span>
      </div>
      <motion.div
        initial="hidden"
        animate={animationControls}
        variants={globalSlideUp}
        custom={0}
        className="toptext"
      >
        <Styled.h2>{title}</Styled.h2>
        <Styled.p>{description}</Styled.p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={animationControls}
        variants={globalSlideUp}
        custom={1}
        className="list"
      >
        <Styled.p className="listtitle">{listTitle}</Styled.p>
        <div className="listbox">
          {listItems.map((item, i) => (
            <div className="listitem" key={i}>
              <Styled.p>{item.text}</Styled.p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TextBlock;
