/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";
import { rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";

const Secure = ({
  setNavbarStyling,
  navBarStyling,
  subMenuStyling,
  setSubMenuStyling,
  windowHeight,
  isDesktop,
}) => {
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
              <Styled.h2>Secure by design</Styled.h2>
              <Styled.p>
                Protecting your people data is our top priority.
              </Styled.p>
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
            <ReactSVG src="/assets/svgs/biglock.svg" />
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Secure;
