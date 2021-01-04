/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx } from "theme-ui";
import Button from "../button";

const TopContent = ({ isDesktop, content }) => {
  const { button_text, url } = content;
  return (
    <div
      sx={{
        variant: "pages.product.integrations.topcontent",
      }}
    >
      <div className="buttonwrapper">
        <Button url={url} text={button_text} />
      </div>
      <div className="graphics">
        <svg
          width="156"
          height="114"
          viewBox="0 0 156 114"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="177"
            height="114"
          >
            <rect width="177" height="114" fill="#C4C4C4" />
          </mask>
          <g mask="url(#mask0)">
            <circle
              cx="149"
              cy="35.0039"
              r="25"
              stroke="#00FCFF"
              stroke-width="2"
            />
            <circle
              cx="89"
              cy="98.0039"
              r="79"
              stroke="#335AFF"
              stroke-width="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default TopContent;
