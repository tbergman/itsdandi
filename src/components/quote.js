/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import InView from "./inview";
import { ReactSVG } from "react-svg";
import { rootMargin, rootMarginSub } from "../helpers/utils";
import SubInView from "./subinview";

const Quote = ({
  setNavbarStyling,
  windowHeight,
  bg,
  navBarStyling,
  setSubMenuStyling,
  subMenuStyling,
  content,
  isDesktop,
}) => {
  const { body, desktop_image, mobile_image, name, title } = content;

  return (
    <InView
      variant="components.shared.quote"
      navBarStyling={navBarStyling}
      setNavbarStyling={setNavbarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
      bg={bg}
    >
      <SubInView
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={subMenuStyling}
        rootMargin={rootMarginSub(windowHeight)}
      >
        <div
          sx={{
            variant: "grid",
          }}
        >
          <div className="imagewrapper">
            <picture>
              <source
                media="(min-width: 800px)"
                srcSet={desktop_image}
              ></source>
              <source srcSet={mobile_image}></source>
              <img src={desktop_image} alt="" />
            </picture>
          </div>
          <div className="text">
            <ReactSVG className="quotation" src="/assets/svgs/quotation.svg" />
            <Styled.h3>{body}</Styled.h3>
            <Styled.p>
              {name}
              <br />
              {title}
            </Styled.p>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Quote;
