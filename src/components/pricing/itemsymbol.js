/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { motion } from "framer-motion";
import { Table__circle } from "../../helpers/animations/pricing";

const ItemSymbol = ({ input_, color, animate, idx }) => {
  switch (input_) {
    case "circle": {
      if (animate) {
        return (
          <motion.svg viewBox="0 0 100 100">
            <motion.circle
              sx={{
                transform: "scale(0)",
              }}
              initial="initial"
              animate="animate"
              variants={Table__circle}
              custom={idx}
              cx="50"
              cy="50"
              r="50"
              fill={color}
            />
          </motion.svg>
        );
      }
      return (
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" fill={color} />
        </svg>
      );
    }
    case "circlesmall": {
      return (
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill={color} />
        </svg>
      );
    }
    case "empty": {
      return null;
    }
    default: {
      return (
        <Styled.p
          sx={{
            color: color,
            writingMode: ["vertical-rl", "unset"],
            textAlign: ["right", "unset"],
          }}
        >
          {input_}
        </Styled.p>
      );
    }
  }
};

export default ItemSymbol;
