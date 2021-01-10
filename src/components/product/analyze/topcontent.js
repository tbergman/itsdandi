/** @jsx jsx */
import { jsx } from "theme-ui";
import Button from "../button";

const TopContent = ({ isDesktop, content }) => {
  const { button_text, url } = content;
  return (
    <div
      sx={{
        variant: "pages.product.analyze.topcontent",
      }}
    >
      <div className="buttonwrapper">
        <Button url={url} text={button_text} />
      </div>
      <div className="graphics">
        {isDesktop ? (
          <svg
            width="330"
            height="311"
            viewBox="0 0 330 311"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="5"
              y1="310.004"
              x2="6"
              y2="154.004"
              stroke="#FF9133"
              strokeWidth="2"
            />
            <line
              x1="85"
              y1="310.004"
              x2="86"
              y2="97.0039"
              stroke="#FF9133"
              strokeWidth="2"
            />
            <line
              x1="165"
              y1="310.004"
              x2="166"
              y2="8.00391"
              stroke="#FF9133"
              strokeWidth="2"
            />
            <line
              x1="245"
              y1="310.004"
              x2="246"
              y2="100.004"
              stroke="#FF9133"
              strokeWidth="2"
            />
            <line
              x1="325"
              y1="310.004"
              x2="326"
              y2="54.0039"
              stroke="#FF9133"
              strokeWidth="2"
            />
            <circle cx="5" cy="149.004" r="5" fill="#FF9133" />
            <circle cx="85" cy="92.0039" r="5" fill="#FF9133" />
            <circle cx="165" cy="5.00391" r="5" fill="#FF9133" />
            <circle cx="245" cy="105.004" r="5" fill="#FF9133" />
            <circle cx="325" cy="55.0039" r="5" fill="#FF9133" />
          </svg>
        ) : (
          <svg
            width="145"
            height="90"
            viewBox="0 0 145 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 89.0039L4 39.0039" stroke="#FF9133" strokeWidth="2" />
            <path d="M51 89.0039L51 16.0039" stroke="#FF9133" strokeWidth="2" />
            <path d="M96 89.0039L96 7.00391" stroke="#FF9133" strokeWidth="2" />
            <path
              d="M141 89.0039L141 8.00391"
              stroke="#FF9133"
              strokeWidth="2"
            />
            <circle cx="4" cy="37.0039" r="4" fill="#FF9133" />
            <circle cx="51" cy="15.0039" r="4" fill="#FF9133" />
            <circle cx="96" cy="4.00391" r="4" fill="#FF9133" />
            <circle cx="141" cy="11.0039" r="4" fill="#FF9133" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default TopContent;
