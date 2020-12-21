/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";
import { rootMargin } from "../../../helpers/utils";

const LearnMore = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  isDesktop,
}) => {
  return (
    <InView
      variant="pages.community.support.learnmore"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="imagewrapper">
          <img src="/assets/images/supportimage.png" alt="" />
        </div>

        <div className="text">
          <Styled.h2>Your partners in change</Styled.h2>
          <Styled.p>
            DEI is a journey. Dandi’s Marketplace Partners are here to help you
            navigate the challenges you meet along the way.
          </Styled.p>
          <div className="link">
            <LearnMoreLink href="/" text={`Learn more`} color="#335AFF" />
          </div>
        </div>
      </div>
    </InView>
  );
};

export default LearnMore;
