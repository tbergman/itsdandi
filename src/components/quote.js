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
          className="Quote"
        >
          <div className="Quote__imageWrapper">
            <picture className="Quote__imageWrapper-image">
              <source
                media="(min-width: 800px)"
                srcSet={desktop_image}
              ></source>
              <source srcSet={mobile_image}></source>
              <img src={desktop_image} alt="" />
            </picture>
          </div>
          <div className="Quote__textWrapper">
            <div className="Quote__textWrapper-text">
              <ReactSVG
                className="Quote__textWrapper-text-quotation"
                src="/assets/svgs/quotation.svg"
              />
              <Styled.h3 className="Quote__textWrapper-text-body">
                {body}
              </Styled.h3>
              <Styled.p className="Quote__textWrapper-text-name">
                {name}
                <br />
                {title}
              </Styled.p>
            </div>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Quote;
