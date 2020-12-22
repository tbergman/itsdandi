/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import InView from "./inview";
import { ReactSVG } from "react-svg";
import { rootMargin } from "../helpers/utils";

const Quote = ({
  setNavbarStyling,
  windowHeight,
  bg,
  navBarStyling,
  image,
  name,
  title,
  text,
  isDesktop,
}) => {
  const { theme } = useThemeUI();
  return (
    <InView
      variant="components.shared.quote"
      navBarStyling={navBarStyling}
      setNavbarStyling={setNavbarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
      bg={bg}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="imagewrapper">
          <picture>
            <source media="(min-width: 800px)" srcSet={image.desktop}></source>
            <source srcSet={image.mobile}></source>
            <img src={image.mobile} alt="" />
          </picture>
        </div>
        <div className="text">
          <ReactSVG className="quotation" src="/assets/svgs/quotation.svg" />
          <Styled.h3>{text}</Styled.h3>
          <Styled.p>
            {name}
            <br />
            {title}
          </Styled.p>
        </div>
      </div>
    </InView>
  );
};

export default Quote;
