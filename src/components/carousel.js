/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { motion } from "framer-motion";

const Carousel = ({ slides, current, color }) => {
  return (
    <div
      sx={{
        variant: "components.shared.carousel",
      }}
    >
      {slides.map((slide, i) => (
        <div className="item" key={i}>
          <motion.div layout className="header">
            <div
              sx={{
                color:
                  current === i
                    ? "rgba(242, 242, 242, 1)"
                    : "rgba(242, 242, 242, 0.35)",
                left: current === i ? 0 : "3px",
              }}
              className="progressBar"
            >
              <motion.div
                className={current === i ? "animation active" : "animation"}
              ></motion.div>
            </div>
            <Styled.p
              sx={{
                color:
                  current === i
                    ? "rgba(242, 242, 242, 1)"
                    : "rgba(242, 242, 242, 0.35)",
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
            className="body"
          >
            <Styled.p
              sx={{
                color: "rgba(242, 242, 242, .95)",
              }}
            >
              {slide.body}
            </Styled.p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
