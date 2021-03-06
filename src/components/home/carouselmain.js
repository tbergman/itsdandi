/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../learnmorelink";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import CarouselItem from "../carouselitem";
import { globalSlideUp, imageCarousel } from "../../helpers/animations";
import { Transition } from "react-transition-group";
import { gsap } from "gsap";

const CarouselMain = ({ description, items, inView }) => {
  const items_ = items.map((i) => i.fields);
  const [current, setCurrent] = useState(0);
  const animationControls = useAnimation();
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
    <div className="Carousel__carouselWrapper">
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
      </div>
    </div>
  );
};

export default CarouselMain;
