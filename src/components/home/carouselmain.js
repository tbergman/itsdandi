/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../learnmorelink";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CarouselItem from "../carouselitem";

const CarouselMain = ({ description, items }) => {
  const items_ = items.map((i) => i.fields);
  console.log(items_);
  const [current, setCurrent] = useState(0);

  const time = 7500;
  // const images = [
  //   "/assets/images/01.start_Get the full picture.png",
  //   "/assets/images/01_start_measure_move_forward.png",
  //   "/assets/images/01_start_put your_insights_to_work.png",
  // ];
  // const slides = [
  //   {
  //     header: "Get the full people picture",
  //     body:
  //       "Dandi aggregates all your HR data to give an unprecedented view of the employee experience.",
  //     buttonText: "Learn more",
  //     url: "/",
  //   },
  //   {
  //     header: "Measure, and move forward",
  //     body:
  //       "Dandi aggregates all your HR data to give an unprecedented view of the employee experience.",
  //     buttonText: "Learn more",
  //     url: "/product/measure",
  //   },
  //   {
  //     header: `Put your insights to work`,
  //     body: `Dandi aggregates all your HR data to give an unprecedented view of the employee experience.`,
  //     buttonText: `Learn more`,
  //     url: "/",
  //   },
  // ];

  const variants = {
    enter: {
      opacity: 0,
      x: 1000,
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -1000,
      opacity: 0,
    },
  };

  useEffect(() => {
    const next = (current + 1) % items_.length;
    const id = setTimeout(() => setCurrent(next), time);
    return () => clearTimeout(id);
  }, [current]);

  return (
    <div className="carousel">
      <div className="description">
        <Styled.p>{description}</Styled.p>
      </div>
      <AnimatePresence initial={false}>
        <motion.div className="imagewrapper">
          <motion.picture>
            <motion.source
              media="(min-width: 800px)"
              srcSet={items_[current].desktop_image}
            ></motion.source>
            <motion.source
              srcSet={items_[current].mobile_image}
            ></motion.source>

            <motion.img
              key={current}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              src={items_[current].desktop_image}
              alt=""
            />
          </motion.picture>
        </motion.div>
      </AnimatePresence>

      <div className="carouselwrapper">
        <div
          sx={{
            variant: "components.shared.carousel",
          }}
        >
          {items_.map((slide, i) => (
            <CarouselItem
              key={i}
              idx={i}
              setCurrent={setCurrent}
              header={slide.header}
              progressBarBg="turquoise"
              current={current === i}
            >
              <Styled.p
                sx={{
                  color: "rgba(242, 242, 242, 0.7)",
                }}
              >
                {slide.body}
              </Styled.p>
              <div className="link">
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
