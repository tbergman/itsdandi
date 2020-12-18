/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../learnmorelink";
import InView from "../inview";
import { rootMargin } from "../../helpers/utils";

const AdvanceDEI = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
}) => {
  return (
    <InView
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
      variant="pages.home.advancedei"
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h2>Advancing DEI, every step of the way</Styled.h2>
          <Styled.p>
            Whether your business is just starting its DEI initiatives or
            already has programs underway, Dandi has the flexibility to meet you
            where you are.
          </Styled.p>
          <div className="link">
            <LearnMoreLink
              href="/values/deijourney"
              text="Learn more about the DEI journey."
              color="#1A1A1D"
            />
          </div>
        </div>
        <div className="graphics">
          <div className="box1"></div>
          <div className="box2"></div>
          <div className="box3"></div>
        </div>
      </div>
    </InView>
  );
};

export default AdvanceDEI;
