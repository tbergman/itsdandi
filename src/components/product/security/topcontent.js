/** @jsx jsx */
import { jsx } from "theme-ui";
import Button from "../button";

const TopContent = () => {
  return (
    <div
      sx={{
        variant: "pages.product.security.topcontent",
      }}
    >
      <div className="buttonwrapper">
        <Button url="/" text="Request a demo" />
      </div>
      <div className="graphics">
        <svg
          width="148"
          height="175"
          viewBox="0 0 148 175"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="-0.498146"
            y="1.32122"
            width="36.6589"
            height="81.2998"
            rx="18.3294"
            transform="matrix(0.413597 0.91046 -0.911744 0.41076 77.85 106.816)"
            stroke="#335AFF"
            stroke-width="2"
          />
          <rect
            x="-1.19601"
            y="-0.757047"
            width="36.6235"
            height="80.911"
            rx="18.3118"
            transform="matrix(-0.975855 0.218419 -0.220151 -0.975466 107.772 125.094)"
            stroke="#FFD93B"
            stroke-width="2"
          />
          <rect
            x="-0.570172"
            y="1.29202"
            width="36.483"
            height="81.194"
            rx="18.2415"
            transform="matrix(0.362731 0.931894 -0.932904 0.360125 134.883 1.36979)"
            stroke="#F9D2FF"
            stroke-width="2"
          />
          <path
            d="M70.043 112.859L67.2272 112.86"
            stroke="#335AFF"
            stroke-width="2"
          />
          <path
            d="M92.1152 56.4688L92.95 57.5079"
            stroke="#FFD93B"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default TopContent;
