/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import { useState, useRef, useEffect } from "react";
import InView from "../inview";
import { lineBreaks, rootMargin } from "../../helpers/utils";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
import {
  quotesCarousel,
  quotesCarouselText,
  quotesCarouselTimerMobile,
  quotesCarouselTimerDesktop,
} from "../../helpers/animations";

const Quotes = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
  isServer,
  content,
}) => {
  const { quotes } = content;
  const [[page, settings], setPage] = useState([
    0,
    {
      direction: 0,
      width: 0,
    },
  ]);
  const imageRef = useRef(null);
  const index = wrap(0, quotes.length, page);
  const time = 10000;
  const paginate = (newDirection) => {
    setPage([
      page + newDirection,
      {
        direction: newDirection,
        width: imageRef.current ? imageRef.current.offsetWidth : 0,
      },
    ]);
  };
  const swipeConfidenceThreshold = 100;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  useEffect(() => {
    const id = setTimeout(() => paginate(1), time);
    return () => clearTimeout(id);
  }, [page]);

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
        className="Quotes"
      >
        <div className="Quotes__content">
          <motion.div ref={imageRef} className="Quotes__imageWrapper">
            <AnimatePresence initial={false} custom={settings}>
              <motion.picture
                className="Quotes__picture"
                key={page}
                custom={settings}
                variants={quotesCarousel}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                dragElastic={0}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.y);

                  if (offset.x < 0) {
                    paginate(1);
                  } else if (offset.x > 0) {
                    paginate(-1);
                  }
                }}
              >
                <motion.source
                  media="(min-width: 800px)"
                  srcSet={quotes[index].fields.desktop_image}
                ></motion.source>
                <motion.source
                  srcSet={quotes[index].fields.mobile_image}
                ></motion.source>

                <motion.img
                  className="Quotes__image"
                  src={quotes[index].fields.desktop_image}
                  alt=""
                />
              </motion.picture>
            </AnimatePresence>
          </motion.div>

          <motion.div className="Quotes__textWrapper">
            <AnimatePresence initial={false} exitBeforeEnter>
              <motion.div
                key={index}
                initial="enter"
                animate="center"
                exit="exit"
                variants={quotesCarouselText}
                className="Quotes__text"
              >
                <motion.svg
                  className="Quotes__quotationmark"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 8.86538C0 6.07829 0.646281 3.99807 1.93884 2.62473C3.2718 1.25138 4.98848 0.443527 7.0889 0.201172V3.41238C6.11947 3.69513 5.33182 4.24043 4.72593 5.04828C4.12004 5.81574 3.8171 6.98712 3.8171 8.56243V8.86538H7.14949V16.0149H0V8.86538ZM9.8154 16.0149V8.86538C9.8154 6.07829 10.4617 3.99807 11.7542 2.62473C13.0872 1.25138 14.8039 0.443527 16.9043 0.201172V3.41238C15.9349 3.69513 15.1472 4.24043 14.5413 5.04828C13.9354 5.81574 13.6325 6.98712 13.6325 8.56243V8.86538H16.9649V16.0149H9.8154Z"
                    fill="#1A1A1D"
                  />
                </motion.svg>

                <Styled.h3 className="Quotes__body">
                  {lineBreaks(quotes[index].fields.body)}
                </Styled.h3>
                <div className="Quotes__source">
                  <Styled.p className="Quotes_name">
                    {quotes[index].fields.name}
                  </Styled.p>
                  <Styled.p className="Quotes__title">
                    {quotes[index].fields.title},<br />{" "}
                    {quotes[index].fields.company}
                  </Styled.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="Quotes__navigation">
          <div className="Quotes__prev">
            <svg
              onClick={() => paginate(-1)}
              className="Quotes__arrow"
              width="15"
              height="26"
              viewBox="0 0 15 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3137 1.68629L2 13L13.3137 24.3137"
                stroke="#1A1A1D"
                strokeWidth="3"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="Quotes__next">
            <svg
              onClick={() => paginate(1)}
              className="Quotes__arrow"
              width="15"
              height="26"
              viewBox="0 0 15 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3137 1.68629L2 13L13.3137 24.3137"
                stroke="#1A1A1D"
                strokeWidth="3"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {!isServer && (
          <div className="Quotes__timerWrapper">
            {isDesktop ? (
              <motion.div
                key={page}
                initial="initial"
                animate="animate"
                variants={quotesCarouselTimerDesktop}
                className="Quotes__timer"
              />
            ) : (
              <motion.div
                key={page}
                initial="initial"
                animate="animate"
                variants={quotesCarouselTimerMobile}
                className="Quotes__timer"
              />
            )}
          </div>
        )}
      </div>
    </InView>
  );
};

export default Quotes;
