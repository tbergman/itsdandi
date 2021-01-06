/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import LearnMoreLink from "../learnmorelink";
import InView from "../inview";
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from "framer-motion";
import { rootMargin, lineBreaks } from "../../helpers/utils";
import useWindowScroll from "@react-hook/window-scroll";
import { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const LearnMore = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
  content,
}) => {
  const { header, buttonText, body, desktopImage, mobileImage, url } = content;
  const { scrollY } = useViewportScroll();
  const scrollY_ = useWindowScroll(60);
  const animation = useAnimation();
  const { inView, ref, entry } = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <InView
      variant="pages.home.learnmore"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <div
        sx={{
          variant: "grid",
        }}
        className="LearnMore"
      >
        <motion.div
          style={{
            opacity: useTransform(scrollY, [0, 175, 10000], [1, 0, 0]),
            scale: useTransform(scrollY, [0, 175, 10000], [1, 0, 0]),
          }}
          className="LearnMore__toptext"
        >
          <Styled.p className="LearnMore__toptext-text">
            Learn more about Dandi
          </Styled.p>
          <svg
            className="LearnMore__toptext-arrow"
            width="51"
            height="105"
            viewBox="0 0 51 105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={
                isDesktop
                  ? "M49.4697 88.5352C49.7626 88.8281 50.2374 88.8281 50.5303 88.5352L55.3033 83.7622C55.5962 83.4693 55.5962 82.9945 55.3033 82.7016C55.0104 82.4087 54.5355 82.4087 54.2426 82.7016L50 86.9442L45.7574 82.7016C45.4645 82.4087 44.9896 82.4087 44.6967 82.7016C44.4038 82.9945 44.4038 83.4693 44.6967 83.7622L49.4697 88.5352ZM0 1.75488H30V0.254883H0V1.75488ZM49.25 21.0049V88.0049H50.75V21.0049H49.25ZM30 1.75488C40.6315 1.75488 49.25 10.3734 49.25 21.0049H50.75C50.75 9.54498 41.4599 0.254883 30 0.254883V1.75488Z"
                  : "M44.4697 104.535C44.7626 104.828 45.2374 104.828 45.5303 104.535L50.3033 99.7622C50.5962 99.4693 50.5962 98.9945 50.3033 98.7016C50.0104 98.4087 49.5355 98.4087 49.2426 98.7016L45 102.944L40.7574 98.7016C40.4645 98.4087 39.9896 98.4087 39.6967 98.7016C39.4038 98.9945 39.4038 99.4693 39.6967 99.7622L44.4697 104.535ZM0 1.75488H25V0.254883H0V1.75488ZM44.25 21.0049V104.005H45.75V21.0049H44.25ZM25 1.75488C35.6315 1.75488 44.25 10.3734 44.25 21.0049H45.75C45.75 9.54497 36.4599 0.254883 25 0.254883V1.75488Z"
              }
              fill="black"
            />
          </svg>
        </motion.div>
        <div className="LearnMore__imageWrapper">
          <picture>
            <source media="(min-width: 800px)" srcSet={desktopImage}></source>
            <source srcSet={mobileImage}></source>
            <img
              className="LearnMore__imageWrapper-image"
              src={desktopImage}
              alt=""
            />
          </picture>
        </div>
        <motion.div
          ref={ref}
          initial={{
            y: 50,
            opacity: 0,
          }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 50,
          }}
          transition={{
            duration: 0.35,
            type: "tween",
          }}
          className="LearnMore__text"
        >
          <Styled.h2 className="LearnMore__text-header">{header}</Styled.h2>

          <div className="LearnMore__text-link">
            <LearnMoreLink href={url} text={buttonText} color="black" />
          </div>

          <Styled.p className="LearnMore__text-body">
            {lineBreaks(body)}
          </Styled.p>
        </motion.div>
      </div>
    </InView>
  );
};

export default LearnMore;
