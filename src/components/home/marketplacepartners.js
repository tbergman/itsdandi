/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Circles from "./circles";
import LearnMoreLink from "../learnmorelink";
import { ReactSVG } from "react-svg";
import InView from "../inview";
import { rootMargin } from "../../helpers/utils";

const MarketPlacePartners = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
}) => {
  return (
    <InView
      variant="pages.home.marketplacepartners"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      {" "}
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="graphics">
          <div className="background">
            <ReactSVG
              className="circles"
              src="/assets/svgs/01_start_your_partners.svg"
            />
          </div>
        </div>
        <div className="text">
          <Styled.h2>Your partners in transformation</Styled.h2>
          <Styled.p>
            Dandi’s Marketplace Partners are here to help you navigate the
            challenges you meet along the way.
          </Styled.p>
          <div className="link">
            <LearnMoreLink
              href="/"
              text="Meet the Dandi Marketplace Partners."
              color="#335AFF"
            />
          </div>
        </div>
      </div>
    </InView>
  );
};

export default MarketPlacePartners;
