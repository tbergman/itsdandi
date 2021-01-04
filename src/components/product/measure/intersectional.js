/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import InView from "../../inview";
import SubInView from "../../subinview";
import { lineBreaks, rootMargin, rootMarginSub } from "../../../helpers/utils";

const Intersectional = ({
  setNavbarStyling,
  navBarStyling,
  subMenuStyling,
  setSubMenuStyling,
  windowHeight,
  isDesktop,
  content,
}) => {
  const { body, desktop_image, mobile_image } = content;
  return (
    <InView
      variant="pages.product.measure.intersectional"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <SubInView
        subMenuStyling={subMenuStyling}
        setSubMenuStyling={setSubMenuStyling}
        rootMargin={rootMarginSub(windowHeight)}
      >
        <div
          sx={{
            variant: "grid",
          }}
        >
          <div className="graphic">
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
            <Styled.p>{lineBreaks(body)}</Styled.p>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Intersectional;
