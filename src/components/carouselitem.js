/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { motion } from "framer-motion";

const CarouselItem = ({
  header,
  current,
  setCurrent,
  progressBarBg,
  idx,
  children,
}) => {
  return (
    <div onClick={() => setCurrent(idx)} className="item">
      <motion.div layout className="header">
        <div
          sx={{
            color: current
              ? "rgba(242, 242, 242, 1)"
              : "rgba(242, 242, 242, 0.35)",
            left: current ? 0 : "3px",
          }}
          className="progressBar"
        >
          <motion.div
            sx={{
              bg: progressBarBg,
            }}
            className={current ? "animation active" : "animation"}
          ></motion.div>
        </div>
        <Styled.p
          sx={{
            color: current
              ? "rgba(242, 242, 242, 1)"
              : "rgba(242, 242, 242, 0.35)",
          }}
        >
          {header}
        </Styled.p>
      </motion.div>
      <motion.div
        layout
        sx={{
          height: current ? "auto" : 0,
          opacity: current ? 1 : 0,
          overflow: "hidden",
        }}
        className="body"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default CarouselItem;
