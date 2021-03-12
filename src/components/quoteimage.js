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
      <picture className="Quote__image containedPicture">
        <source media="(min-width: 800px)" srcSet={desktop_image}></source>
        <source srcSet={mobile_image}></source>
        <img src={desktop_image} alt="" />
      </picture>
    </div>
  );
};

export default QuoteImage;
