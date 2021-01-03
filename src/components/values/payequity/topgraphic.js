/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const TopGraphic = ({ images }) => {
  return (
    <div
      sx={{
        variant: "pages.values.payequity.topgraphic",
      }}
    >
      <picture>
        <source media="(min-width: 800px)" srcSet={images.desktop}></source>
        <source srcSet={images.mobile}></source>
        <img src={images.desktop} alt="" />
      </picture>
    </div>
  );
};

export default TopGraphic;
