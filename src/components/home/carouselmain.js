/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../learnmorelink";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  ];

  useEffect(() => {
    const next = (current + 1) % slides.length;
    const id = setTimeout(() => setCurrent(next), time);
    return () => clearTimeout(id);
  }, [current]);

  return (
    <div className="carouselMain">
      {slides.map((slide, i) => (
        <div className="carouselItem">
          <div className="carouselItemHeader">
            <div
              sx={{
                opacity: current === i ? 1 : 0.2,
                left: current === i ? 0 : "3px",
              }}
              className="progressBar"
            >
              <motion.div
                initial={{
                  height: 0,
                }}
                animate={{
                  height: "100%",
                }}
                transition={{
                  duration: time / 1000,
                }}
                sx={{
                  visibility: current === i ? "visible" : "hidden",
                  height: "100%",
                }}
                className="progressBarAnimation"
              ></motion.div>
            </div>
            <Styled.p
              sx={{
                opacity: current === i ? 1 : 0.5,
              }}
            >
              {slide.header}
            </Styled.p>
          </div>
          <div
            sx={{
              height: current === i ? "auto" : 0,
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
            <LearnMoreLink href="/" text="Learn more" color="#F9D2FF" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselMain;
