/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../learnmorelink";
import InView from "../inview";
import { rootMargin } from "../../helpers/utils";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const AdvanceDEI = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <InView
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
      variant="pages.home.advancedei"
    >
      <div
        ref={ref}
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h2>Advancing DEI, every step of the way</Styled.h2>
          <Styled.p>
            Whether your business is just starting its DEI initiatives or
            already has programs underway, Dandi has the flexibility to meet you
            where you are.
          </Styled.p>
          <div className="link">
            <LearnMoreLink
              href="/values/deijourney"
              text="Learn more about the DEI journey."
              color="#1A1A1D"
            />
          </div>
        </div>
        <motion.div className="graphics">
          <motion.div
            style={{
              originX: 0,
              originY: "100%",
              scale: 0,
            }}
            initial={{
              scale: 0,
            }}
            animate={{
              scale: inView ? 1 : 0,
            }}
            transition={{
              duration: 0.8,
              type: "tween",
            }}
            className="box1"
          ></motion.div>
          <motion.div
            style={{
              originX: 0,
              originY: "100%",
              scale: 0,
            }}
            initial={{
              scale: 0,
            }}
            animate={{
              scale: inView ? 1 : 0,
            }}
            transition={{
              duration: 0.5,

              type: "tween",
            }}
            className="box2"
          ></motion.div>
          <motion.div
            style={{
              originX: 0,
              originY: "100%",
              scale: 0,
            }}
            initial={{
              scale: 0,
            }}
            animate={{
              scale: inView ? 1 : 0,
            }}
            transition={{
              duration: 0.5,

              type: "tween",
            }}
            className="box3"
          ></motion.div>
        </motion.div>
      </div>
    </InView>
  );
};

export default AdvanceDEI;
