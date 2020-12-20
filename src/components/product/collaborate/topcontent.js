/** @jsx jsx */
import { jsx } from "theme-ui";
import Button from "../button";

const TopContent = () => {
  return (
    <div
      sx={{
        variant: "pages.product.collaborate.topcontent",
      }}
    >
      <div className="buttonwrapper">
        <Button url="/" text="Request a demo" />
      </div>
      <div className="graphics">
        <svg
          width="148"
          height="98"
          viewBox="0 0 148 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M115.06 97.0048C115.06 87.0308 106.762 78.9453 96.5254 78.9453C86.289 78.9453 77.9907 87.0308 77.9907 97.0048"
            stroke="#335AFF"
            stroke-width="2"
          />
          <path
            d="M154.981 97.0038C154.981 64.9821 128.81 39.0234 96.5255 39.0234C64.2413 39.0234 38.0698 64.9821 38.0698 97.0038"
            stroke="#335AFF"
            stroke-width="2"
          />
          <path
            d="M192.05 97.0042C192.05 43.9847 149.282 1.00391 96.5251 1.00391C43.768 1.00391 1 43.9847 1 97.0042"
            stroke="#335AFF"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default TopContent;
