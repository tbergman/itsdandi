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

const Person = ({ images, name, title, company, linkedin_url, idx }) => {
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
    <a
      ref={ref}
      href="https://www.google.com"
      target="_blank"
      className="person"
    >
      <motion.div
        initial="hidden"
        animate={imageAnimation}
        variants={personImageAnimation}
        className="imagewrapper"
      >
        <picture>
          <source media="(min-width: 800px)" srcSet={images.desktop}></source>
          <source srcSet={images.mobile}></source>
          <img src={images.desktop} alt="" />
        </picture>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={textAnimation}
        variants={personAnimation}
        custom={idx}
        className="text"
      >
        <Styled.p className="name">{name}</Styled.p>
        <Styled.p className="title">{`${title},  ${company}`}</Styled.p>
      </motion.div>
    </a>
  );
};
export default Person;
