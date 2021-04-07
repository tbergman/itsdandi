/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import {
  globalSlideUp,
  personAnimation,
  personImageAnimation,
} from "../../helpers/animations";

const Person = ({ content, idx }) => {
  const {
    company,
    linkedin_url,
    name,
    title,
    desktop_image,
    mobile_image,
  } = content;
  const textAnimation = useAnimation();
  const imageAnimation = useAnimation();

  const { inView, ref, entry } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      textAnimation.start((i) => {
        return personAnimation.visible(i);
      });
      imageAnimation.start((i) => {
        return personImageAnimation.visible(i);
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className="person">
      <motion.div
        initial="hidden"
        animate={imageAnimation}
        variants={personImageAnimation}
        className="person__imageWrapper"
      >
        <picture>
          <source media="(min-width: 800px)" srcSet={desktop_image}></source>
          <source srcSet={mobile_image}></source>
          <img className="person__image" src={desktop_image} alt="" />
        </picture>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={textAnimation}
        variants={personAnimation}
        custom={idx}
        className="person__text"
      >
        <a href={linkedin_url} target="_blank" className="person__link">
          <Styled.p className="person__name">{name}</Styled.p>
          <Styled.p className="person__title">{title}</Styled.p>
          <Styled.p className="person__company">{company}</Styled.p>
        </a>
      </motion.div>
    </div>
  );
};
export default Person;
