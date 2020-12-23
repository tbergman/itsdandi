/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import { useState } from "react";
import InView from "../inview";
import { rootMargin } from "../../helpers/utils";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";

const Quotes = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
}) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };
  const images = [
    {
      desktop: "/assets/images/carol1_desktop.png",
      mobile: "/assets/images/carol1.png",
    },
    {
      desktop: "/assets/images/supportimage.png",
      mobile: "/assets/images/supportimage.png",
    },
  ];

  const imageIndex = wrap(0, images.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <InView
      variant="pages.home.quotes"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div className="imagewrapper">
            <motion.picture>
              <motion.source
                media="(min-width: 800px)"
                srcSet={images[imageIndex].desktop}
              ></motion.source>
              <motion.source srcSet={images[imageIndex].mobile}></motion.source>

              <motion.img
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                src={images[imageIndex].desktop}
                alt=""
              />
            </motion.picture>
          </motion.div>
        </AnimatePresence>

        <div className="text">
          <ReactSVG
            className="quotationmark"
            src="/assets/svgs/quotation.svg"
          />
          <Styled.h3>
            The right metrics drive the focus and recources for real progress.
            Dandi delivers these metrics Quickly and easily
          </Styled.h3>
          <div className="source">
            <Styled.p className="name">Carol Watson</Styled.p>
            <Styled.p className="title">
              Senior Director, Diversity Best Practices
            </Styled.p>
          </div>
        </div>
        <div className="navigation">
          <div onClick={() => paginate(-1)} className="prev">
            <ReactSVG src="assets/svgs/prev.svg" />
          </div>
          <div onClick={() => paginate(1)} className="next">
            <ReactSVG src="assets/svgs/prev.svg" />
          </div>
        </div>
      </div>
    </InView>
  );
};

export default Quotes;
