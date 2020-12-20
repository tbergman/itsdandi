/** @jsx jsx */
import { jsx } from "theme-ui";
import Button from "../button";

const TopContent = () => {
  return (
    <div
      sx={{
        variant: "pages.product.analyze.topcontent",
      }}
    >
      <div className="buttonwrapper">
        <Button url="/" text="Request a demo" />
      </div>
      <div className="graphics">
        <svg
          width="145"
          height="90"
          viewBox="0 0 145 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 89.0039L4 39.0039" stroke="#FF9133" stroke-width="2" />
          <path d="M51 89.0039L51 16.0039" stroke="#FF9133" stroke-width="2" />
          <path d="M96 89.0039L96 7.00391" stroke="#FF9133" stroke-width="2" />
          <path
            d="M141 89.0039L141 8.00391"
            stroke="#FF9133"
            stroke-width="2"
          />
          <circle cx="4" cy="37.0039" r="4" fill="#FF9133" />
          <circle cx="51" cy="15.0039" r="4" fill="#FF9133" />
          <circle cx="96" cy="4.00391" r="4" fill="#FF9133" />
          <circle cx="141" cy="11.0039" r="4" fill="#FF9133" />
        </svg>
      </div>
    </div>
  );
};

export default TopContent;
