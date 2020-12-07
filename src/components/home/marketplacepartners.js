/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Circles from "./circles";
import LearnMoreLink from "../learnmorelink";
import { ReactSVG } from "react-svg";

const MarketPlacePartners = () => {
  return (
    <div
      sx={{
        variant: "pages.home.marketplacepartners",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="graphics">
          <ReactSVG src="/assets/svgs/01_start_your_partners.svg" />
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
    </div>
  );
};

export default MarketPlacePartners;
