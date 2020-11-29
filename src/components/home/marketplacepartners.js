/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Circles from "./circles";
import LearnMoreLink from "../learnmorelink";

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
        <div className="mppTop">
          <Circles />
        </div>
        <div className="mppMain">
          <Styled.h2 className="mppHeader">
            Your partners in transformation
          </Styled.h2>
          <Styled.p className="mppSub">
            Dandi’s Marketplace Partners are here to help you navigate the
            challenges you meet along the way.
          </Styled.p>
          <div className="mppLink">
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
