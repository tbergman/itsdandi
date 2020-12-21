/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../learnmorelink";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CarouselItem from "../carouselitem";

const CarouselMain = () => {
  const [current, setCurrent] = useState(0);
  const time = 5000;
  const images = [
    "/assets/images/01.start_Get the full picture.png",
    "/assets/images/01_start_measure_move_forward.png",
    "/assets/images/01_start_put your_insights_to_work.png",
  ];
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
    <div className="carousel">
      <div className="description">
        <Styled.p>
          On day 1 with Dandi, you’ll unlock more than 1 million new people
          insights, along with powerful capabilities for making sense of it all.
        </Styled.p>
      </div>
      <div className="imagewrapper">
        <img src={images[current]} alt="" />
      </div>
      <div className="carouselwrapper">
        <div
          sx={{
            variant: "components.shared.carousel",
          }}
        >
          {slides.map((slide, i) => (
            <CarouselItem
              key={i}
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
                <LearnMoreLink href="/" text="Learn more" color="#F9D2FF" />
              </div>
            </CarouselItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselMain;
