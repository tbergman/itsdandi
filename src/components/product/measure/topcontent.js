/** @jsx jsx  */
import { ReactSVG } from "react-svg";
import { jsx } from "theme-ui";
import Button from "../button";

const TopContent = () => {
  return (
    <div
      sx={{
        variant: "pages.product.measure.topcontent",
      }}
    >
      <div className="buttonwrapper">
        <Button url="/" text={`Request a demo`} />
      </div>

      <div className="graphics">
        <svg
          width="150"
          height="50"
          viewBox="0 0 150 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1"
            y1="50"
            x2="1"
            y2="0"
            stroke="#335AFF"
            stroke-width="2"
          />
          <line
            x1="21"
            y1="50"
            x2="21"
            y2="25"
            stroke="#335AFF"
            stroke-width="2"
          />
          <line
            x1="41"
            y1="50"
            x2="41"
            y2="25"
            stroke="#335AFF"
            stroke-width="2"
          />
          <line
            x1="60"
            y1="50"
            x2="60"
            y2="25"
            stroke="#335AFF"
            stroke-width="2"
          />
          <line
            x1="80"
            y1="50"
            x2="80"
            y2="0"
            stroke="#335AFF"
            stroke-width="2"
          />
          <line
            x1="100"
            y1="50"
            x2="100"
            y2="25"
            stroke="#335AFF"
            stroke-width="2"
          />
          <line
            x1="120"
            y1="50"
            x2="120"
            y2="25"
            stroke="#335AFF"
            stroke-width="2"
          />
          <line
            x1="140"
            y1="50"
            x2="140"
            y2="25"
            stroke="#335AFF"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default TopContent;
