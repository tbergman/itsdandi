/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";
import { rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";

const Curious = ({
  setNavbarStyling,
  navBarStyling,
  subMenuStyling,
  setSubMenuStyling,
  windowHeight,
  isDesktop,
}) => {
  return (
    <InView
      variant="pages.community.partners.curious"
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
          <div className="row1">
            <div className="section1">
              <Styled.h2>Make our Partners yours</Styled.h2>
            </div>
            <div className="section2">
              <Styled.p>
                Curious about working with a Dandi Marketplace Partner? Contact
                us at marketplace@itsdandi.com.
                <br />
                <br /> We’re happy to connect you to our partners, even if
                you’re not a Dandi client.
              </Styled.p>
            </div>
          </div>

          <div className="row2">
            <div className="section1">
              <Styled.h2>The Dandi DEI Advisory Board</Styled.h2>
            </div>
            <div className="section2">
              <Styled.p>
                A collective of leading thinkers and change-makers, Dandi’s DEI
                Advisory Board plays a critical role in shaping our platform.
              </Styled.p>
              <div className="link">
                <LearnMoreLink href="/" text={`Learn more`} color="#335AFF" />
              </div>
            </div>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Curious;
