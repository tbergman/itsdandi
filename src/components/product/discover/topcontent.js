/** @jsx jsx */
import { motion } from "framer-motion";
import { jsx, get } from "theme-ui";
import {
  TopContentCircles,
  TopContentLines,
} from "../../../helpers/animations/product/analyze";
import Button from "../button";

const TopContent = ({ isDesktop, content }) => {
  const { button_text, url } = content;
  return (
    <div
      sx={{
        variant: "pages.product.discover.topcontent",
      }}
    >
      <div className="buttonwrapper">
        <Button url={url} text={button_text} isDesktop={isDesktop} />
      </div>
      <div className="graphics">
        <svg
          width="303"
          height="302"
          viewBox="0 0 303 302"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <rect width="303" height="302" fill="#E5E5E5" /> */}

          {/* <rect
              width="1440"
              height="5874"
              transform="translate(-1008 -214)"
              fill="white"
            /> */}
          {/* <rect
              x="-1008"
              y="-213"
              width="1440"
              height="513"
              fill="#F2F2F2"
              fillOpacity="0.5"
            /> */}
          {/* <mask
              id="mask0"
              maskType="alpha"
              maskUnits="userSpaceOnUse"
              x="17"
              y="0"
              width="286"
              height="286"
            >
              <circle
                cx="159.913"
                cy="143.415"
                r="99.7664"
                transform="rotate(45 159.913 143.415)"
                fill="#C4C4C4"
                stroke="#00FCFF"
                strokeWidth="2"
              />
            </mask> */}

          {/* LINES */}
          <g id="lines">
            <line
              x1="28.5514"
              y1="118.281"
              x2="160.363"
              y2="118.281"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="28.5514"
              y1="137.004"
              x2="199.003"
              y2="137.004"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="28.5514"
              y1="155.33"
              x2="113.777"
              y2="155.33"
              stroke="#335AFF"
              strokeWidth="2"
            />
          </g>
          <g id="magnifingGlass">
            <circle
              cx="159.913"
              cy="143.415"
              r="99.7664"
              transform="rotate(45 159.913 143.415)"
              stroke="#00FCFF"
              strokeWidth="2"
            />
            <line
              x1="87.9527"
              y1="213.961"
              x2="1.20716"
              y2="300.707"
              stroke="#00FCFF"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default TopContent;
