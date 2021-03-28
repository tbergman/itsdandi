/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import CarouselMain from "./carouselmain";
import InView from "../inview";
import { lineBreaks, rootMargin } from "../../helpers/utils";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import CarouselItem from "../carouselitem";
import { useInView } from "react-intersection-observer";
import { globalSlideUp } from "../../helpers/animations";
import LearnMoreLink from "../learnmorelink";
import { Transition } from "react-transition-group";
import { gsap } from "gsap";

const Carousel = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
  content,
}) => {
  const { header, description, items } = content;
  const items_ = items.map((i) => i.fields);
  const [current, setCurrent] = useState(0);
  const animationControls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const time = 7500;

  useEffect(() => {
    const next = (current + 1) % items_.length;
    const id = setTimeout(() => setCurrent(next), time);
    return () => clearTimeout(id);
  }, [current]);

  useEffect(() => {
    if (inView) {
      animationControls.start((i) => globalSlideUp.visible(i));
    }
  }, [inView]);

  return (
    <InView
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      variant="pages.home.carousel"
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <div
        ref={ref}
        sx={{
          variant: "grid",
        }}
        className="Carousel"
      >
        <div className="Carousel__topText">
          <Styled.h2 className="Carousel__header">
            {lineBreaks(header)}
          </Styled.h2>
          <Styled.p className="Carousel__description">{description}</Styled.p>
        </div>
        <div className="Carousel__textWrapper">
          <div
            sx={{
              variant: "components.shared.carousel",
            }}
            className="SharedCarousel"
          >
            {items_.map((slide, i) => (
              <CarouselItem
                key={i}
                idx={i}
                setCurrent={setCurrent}
                header={slide.header}
                progressBarBg="turquoise"
                current={current === i}
                time={time}
              >
                <Styled.p
                  sx={{
                    color: "rgba(242, 242, 242, 0.7)",
                  }}
                  className="SharedCarousel__item-body-text"
                >
                  {slide.body}
                </Styled.p>
                <div className="SharedCarousel__item-body-link">
                  <LearnMoreLink
                    href={slide.url}
                    text={slide.button_text}
                    color="#F9D2FF"
                  />
                </div>
              </CarouselItem>
            ))}
          </div>
        </div>
        <div className="Carousel__imageWrapper">
          {items_.map((item, i) => (
            <picture key={i}>
              <source
                media="(min-width: 800px)"
                srcSet={items_[current].desktop_image}
              ></source>
              <source srcSet={items_[current].mobile_image}></source>

              <Transition
                in={current === i}
                timeout={1000}
                unmountOnExit
                mountOnEnter
                onEnter={(node, isAppearing) => {
                  gsap.set(node, {
                    x: 1000,
                    autoAlpha: 0,
                  });
                }}
                addEndListener={(node, done) => {
                  gsap.to(node, {
                    x: 0,

                    autoAlpha: current === i ? 1 : 0,
                    duration: current === i ? 0.6 : 0,
                    onComplete: done,
                    ease: "power2.out",
                  });
                }}
              >
                <img
                  key={current}
                  src={items_[current].desktop_image}
                  alt=""
                  className="Carousel__image"
                />
              </Transition>
            </picture>
          ))}
        </div>
        {/* <motion.div
            variants={globalSlideUp}
            initial="hidden"
            animate={animationControls}
            custom={1}
            className="Carousel__toptext"
          >
          </motion.div>
          <motion.div
            variants={globalSlideUp}
            initial="hidden"
            animate={animationControls}
            custom={2}
            className="Carousel__carouselWrapper-description"
          >
            <Styled.p className="Carousel__carouselWrapper-description-text">
              {description}
            </Styled.p>
          </motion.div>
          <div className="Carousel__carouselWrapper-imageWrapper">
            {items_.map((item, i) => (
              <picture key={i}>
                <source
                  media="(min-width: 800px)"
                  srcSet={items_[current].desktop_image}
                ></source>
                <source srcSet={items_[current].mobile_image}></source>

                <Transition
                  in={current === i}
                  timeout={1000}
                  unmountOnExit
                  mountOnEnter
                  onEnter={(node, isAppearing) => {
                    gsap.set(node, {
                      x: 1000,
                      autoAlpha: 0,
                    });
                  }}
                  addEndListener={(node, done) => {
                    gsap.to(node, {
                      x: 0,

                      autoAlpha: current === i ? 1 : 0,
                      duration: current === i ? 0.6 : 0,
                      onComplete: done,
                      ease: "power2.out",
                    });
                  }}
                >
                  <img
                    key={current}
                    src={items_[current].desktop_image}
                    alt=""
                    className="Carousel__carouselWrapper-imageWrapper-image"
                  />
                </Transition>
              </picture>
            ))}
          </div>

          <div className="Carousel__carouselWrapper-textWrapper">
            <div
              sx={{
                variant: "components.shared.carousel",
              }}
              className="SharedCarousel"
            >
              {items_.map((slide, i) => (
                <CarouselItem
                  key={i}
                  idx={i}
                  setCurrent={setCurrent}
                  header={slide.header}
                  progressBarBg="turquoise"
                  current={current === i}
                  time={time}
                >
                  <Styled.p
                    sx={{
                      color: "rgba(242, 242, 242, 0.7)",
                    }}
                    className="SharedCarousel__item-body-text"
                  >
                    {slide.body}
                  </Styled.p>
                  <div className="SharedCarousel__item-body-link">
                    <LearnMoreLink
                      href={slide.url}
                      text={slide.button_text}
                      color="#F9D2FF"
                    />
                  </div>
                </CarouselItem>
              ))}
            </div>
          </div> */}

        {/* <CarouselMain description={description} items={items} inView={inView} /> */}
      </div>
    </InView>
  );
};

export default Carousel;
