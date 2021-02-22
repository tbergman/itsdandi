/** @jsx jsx */
import { jsx } from "theme-ui";

const Logo = ({ url, idx }) => {
  return (
    <div
      className={`Partners__logoCarousel-rowWrapper-container-row-imageWrapper`}
    >
      <picture>
        <source media="(min-width: 800px)" srcSet={url.desktop_image}></source>
        <source srcSet={url.mobile_image}></source>
        <img
          className="Partners__logoCarousel-rowWrapper-container-row-imageWrapper-image"
          src={url.desktop_image}
          alt=""
        />
      </picture>
    </div>
  );
};

export default Logo;
