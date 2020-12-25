/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";
import { rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";

const LearnMore = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  subMenuStyling,
  setSubMenuStyling,
  isDesktop,
}) => {
  return (
    <InView
      variant="pages.community.support.learnmore"
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
          <div className="imagewrapper">
            <picture>
              <source
                media="(min-width: 800px)"
                srcSet="/assets/images/community/support/image43-desktop.png"
              ></source>
              <source srcSet="/assets/images/supportimage.png"></source>
              <img src="/assets/images/supportimage.png" alt="" />
            </picture>
          </div>

          <div className="text">
            <Styled.h2>Your partners in change</Styled.h2>
            <Styled.p>
              DEI is a journey. Dandi’s Marketplace Partners are here to help
              you navigate the challenges you meet along the way.
            </Styled.p>
            <div className="link">
              <LearnMoreLink href="/" text={`Learn more`} color="#1A1A1D" />
            </div>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default LearnMore;
