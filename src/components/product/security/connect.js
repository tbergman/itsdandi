/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";
import { rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";

const Connect = ({
  setNavbarStyling,
  navBarStyling,
  setSubMenuStyling,
  subMenuStyling,
  windowHeight,
  isDesktop,
}) => {
  return (
    <InView
      variant="pages.product.security.connect"
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
              <Styled.h2>Connect with confidence</Styled.h2>
              <div className="link">
                <LearnMoreLink
                  href="/"
                  text={`Learn more about Dandi privacy and security`}
                  color="#335AFF"
                />
              </div>
            </div>
          </div>

          <div className="graphic">
            <ReactSVG src="/assets/svgs/confidencegraphic.svg" />
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Connect;
