/** @jsx jsx */
import { jsx } from "theme-ui";

const TopImage = () => {
  return (
    <div
      sx={{
        variant: "pages.values.leadership.topimage",
      }}
    >
      <picture>
        <source
          media="(min-width: 800px)"
          srcSet="/assets/images/values/leadership/top-desktop.png"
        ></source>
        <source srcSet="/assets/images/values/leadership/top-desktop.png"></source>
        <img src="/assets/images/values/leadership/top-desktop.png" alt="" />
      </picture>
    </div>
  );
};

export default TopImage;
