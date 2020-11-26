/** @jsx jsx */
import { jsx } from "theme-ui";

const Bars = () => {
  return (
    <div
      sx={{
        variant: "pages.home.top.bars",
      }}
    >
      <div className="barWrapper">
        <span id="bar1"></span>
        <span id="bar2"></span>
        <span id="bar3"></span>
      </div>
    </div>
  );
};

export default Bars;
