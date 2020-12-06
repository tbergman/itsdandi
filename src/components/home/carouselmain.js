/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../learnmorelink";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CarouselMain = () => {
  const [current, setCurrent] = useState(0);
  const time = 5000;
  const slides = [
    {
      header: "Get the full people picture",
      body:
        "Dandi aggregates all your HR data to give an unprecedented view of the employee experience.",
      buttonText: "Learn more",
    },
    {
      header: "Measure, and move forward",
      body:
        "Dandi aggregates all your HR data to give an unprecedented view of the employee experience.",
      buttonText: "Learn more",
    },
    {
      header: `Put your insights to work`,
      body: `Dandi aggregates all your HR data to give an unprecedented view of the employee experience.`,
      buttonText: `Learn more`,
    },
  ];

  useEffect(() => {
    const next = (current + 1) % slides.length;
    const id = setTimeout(() => setCurrent(next), time);
    return () => clearTimeout(id);
  }, [current]);

  return (
    <div className="carouselMain">
      {slides.map((slide, i) => (
        <div className="carouselItem" key={i}>
          <motion.div layout className="carouselItemHeader">
            <div
              sx={{
                opacity: current === i ? 1 : 0.2,
                left: current === i ? 0 : "3px",
              }}
              className="progressBar"
            >
              {/* <motion.div
                layout
                transition={{
                  duration: time / 1000,
                }}
                sx={{
                  visibility: current === i ? "visible" : "hidden",
                  height: current === i ? "100%" : 0,
                }}
                className="progressBarAnimation"
              ></motion.div> */}
            </div>
            <Styled.p
              sx={{
                opacity: current === i ? 1 : 0.5,
              }}
            >
              {slide.header}
            </Styled.p>
          </motion.div>
          <motion.div
            layout
            sx={{
              height: current === i ? "auto" : 0,
              opacity: current == i ? 1 : 0,
              overflow: "hidden",
            }}
            className="carouselItemBody"
          >
            <Styled.p
              sx={{
                opacity: ".7",
              }}
            >
              {slide.body}
            </Styled.p>
            <div className="link">
              <LearnMoreLink href="/" text="Learn more" color="#F9D2FF" />
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default CarouselMain;
