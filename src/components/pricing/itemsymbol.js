/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import AnimatingCircle from "./animatingcircle";

const ItemSymbol = ({ input_, color, animate, idx }) => {
  switch (input_) {
    case "circle": {
      return <AnimatingCircle fill={color} />;
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
