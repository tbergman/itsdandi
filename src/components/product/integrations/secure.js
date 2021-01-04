/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";
import { lineBreaks, rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";

const Secure = ({
  setNavbarStyling,
  navBarStyling,
  subMenuStyling,
  setSubMenuStyling,
  windowHeight,
  isDesktop,
  content,
}) => {
  const { header, body, button_text, url } = content;
  return (
    <InView
      variant="pages.product.integrations.secure"
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
          <div className="wrapper">
            <div className="text">
              <Styled.h2>{header}</Styled.h2>
              <Styled.p>{lineBreaks(body)}</Styled.p>
              <div className="link">
                <LearnMoreLink href={url} text={button_text} color="#335AFF" />
              </div>
            </div>
          </div>

          <div className="graphic">
            <ReactSVG src="/assets/svgs/biglock.svg" />
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Secure;
