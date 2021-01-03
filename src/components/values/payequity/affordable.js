/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";
import theme from "../../../../theme";
import { rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";

const Affordable = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  setSubMenuStyling,
  subMenuStyling,
  isDesktop,
  content,
}) => {
  const {
    body,
    header,
    button_text,
    desktop_image,
    mobile_image,
    url,
  } = content;
  return (
    <InView
      variant="pages.values.payequity.affordable"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
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
          <div className="header">
            <Styled.h2>{header}</Styled.h2>
            <Styled.p>{body}</Styled.p>
            <div className="link">
              <LearnMoreLink href={url} text={button_text} color="#335AFF" />
            </div>
          </div>
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
        </div>
      </SubInView>
    </InView>
  );
};

export default Affordable;
