/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";

const LearnMore = ({ setNavbarStyling, navBarStyling, windowHeight }) => {
  return (
    <InView
      variant="pages.community.support.learnmore"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={`0px 0px -${windowHeight - 94}px 0px`}
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
