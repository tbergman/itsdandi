/** @jsx jsx */
import { jsx } from "theme-ui";
import { ReactSVG } from "react-svg";

const TopGraphic = () => {
  return (
    <div
      sx={{
        variant: "pages.values.deijourney.topgraphic",
      }}
    >
      <ReactSVG src="/assets/svgs/deijourneytop.svg" />
    </div>
  );
};

export default TopGraphic;
