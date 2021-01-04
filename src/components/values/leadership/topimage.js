/** @jsx jsx */
import { jsx } from "theme-ui";

const TopImage = ({ images }) => {
  const { desktop, mobile } = images;
  return (
    <div
      sx={{
        variant: "pages.values.leadership.topimage",
      }}
    >
      <picture>
        <source media="(min-width: 800px)" srcSet={desktop}></source>
        <source srcSet={mobile}></source>
        <img src={desktop} alt="" />
      </picture>
    </div>
  );
};

export default TopImage;
