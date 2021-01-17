/** @jsx jsx */
import { jsx, Slider, Styled } from "theme-ui";
import InView from "../../inview";
import { useState, useEffect } from "react";
import { rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";
import { motion, AnimatePresence } from "framer-motion";
import CarouselItem from "../../carouselitem";
import { imageCarousel } from "../../../helpers/animations";

const DeiWork = ({
  setNavbarStyling,
  navBarStyling,
  subMenuStyling,
  setSubMenuStyling,
  windowHeight,
  isDesktop,
  content,
}) => {
  const [current, setCurrent] = useState(0);
  const time = 7500;
  const { header, body, carousel_item } = content;

  useEffect(() => {
    const next = (current + 1) % carousel_item.length;
    const id = setTimeout(() => setCurrent(next), time);
    return () => clearTimeout(id);
  }, [current]);

  return (
    <InView
      variant="pages.product.collaborate.deiwork"
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
        >
          <div className="title">
            <Styled.h2>Making DEI work</Styled.h2>
            {!isDesktop && (
              <div className="text">
                <Styled.p>
                  Dandi’s workflow tools are designed to make the day-to-day
                  work of advancing DEI easier and more impactful.
                </Styled.p>
              </div>
            )}
          </div>
          <div className="wrapper">
            <div className="section1">
              {isDesktop && (
                <div className="text">
                  <Styled.p>
                    Dandi’s workflow tools are designed to make the day-to-day
                    work of advancing DEI easier and more impactful.
                  </Styled.p>
                </div>
              )}

              <div className="carousel">
                <div
                  sx={{
                    variant: "components.shared.carousel",
                  }}
                >
                  {carousel_item.map((slide, i) => (
                    <CarouselItem
                      key={i}
                      idx={i}
                      setCurrent={setCurrent}
                      header={slide.header}
                      progressBarBg="yellow"
                      current={current === i}
                      time={time}
                    >
                      <Styled.p
                        sx={{
                          color: "rgba(242, 242, 242, 0.7)",
                          mb: [4],
                          mr: [3],
                        }}
                      >
                        {slide.body}
                      </Styled.p>
                    </CarouselItem>
                  ))}
                </div>
              </div>
            </div>
            <AnimatePresence initial={false}>
              <motion.div className="section2">
                <motion.picture>
                  <source
                    media="(min-width: 800px)"
                    srcSet={carousel_item[current].desktop_image}
                  ></source>
                  <source srcSet={carousel_item[current].mobile_image}></source>

                  <motion.img
                    key={current}
                    variants={imageCarousel}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    src={carousel_item[current].desktop_image}
                    alt=""
                  />
                </motion.picture>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default DeiWork;
