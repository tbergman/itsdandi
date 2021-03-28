/** @jsx jsx */
import { jsx } from "theme-ui";

const QuoteImage = ({ content }) => {
  const { desktop_image, mobile_image } = content;
  return (
    <div
      sx={{
        variant: "components.quoteimage",
      }}
      className="Quote__imageWrapper"
    >
      <svg viewBox="0 0 400 400" className="Quote__graphics">
        <circle
          className="Quote__circle"
          cx="320"
          cy="280"
          r="80"
          fill="none"
        />
      </svg>

      <picture>
        <source media="(min-width: 800px)" srcSet={desktop_image}></source>
        <source srcSet={mobile_image}></source>
        <img className="Quote__image" src={desktop_image} alt="" />
      </picture>
    </div>
  );
};

export default QuoteImage;
