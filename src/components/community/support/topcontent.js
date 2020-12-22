/** @jsx jsx */
import { jsx } from "theme-ui";

const TopContent = () => {
  return (
    <div
      sx={{
        variant: "pages.community.support.topcontent",
      }}
    >
      <div className="image">
        <picture>
          <source
            media="(min-width: 800px)"
            srcSet="/assets/images/community/support/image39-desktop.png"
          ></source>
          <source srcSet="/assets/images/community/support/image39.png"></source>
          <img src="/assets/images/community/support/image39.png" alt="" />
        </picture>
      </div>
    </div>
  );
};

export default TopContent;
