/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled, useThemeUI } from "theme-ui";
import LearnMoreLink from "../learnmorelink";
import InView from "../inview";
import { rootMargin } from "../../helpers/utils";

const PayEquity = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
}) => {
  return (
    <InView
      variant="pages.home.payequity"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h2>Dandi makes pay equity possible</Styled.h2>
          <Styled.p>
            With sophisticated compensation analytics built right in, Dandi
            helps you find the pay gaps at your company—and make them disappear.{" "}
          </Styled.p>
          <div className="link">
            <LearnMoreLink
              href="/values/equitypay"
              text="Learn how Dandi helps advance pay equity."
              color="#335AFF"
            />
          </div>
        </div>
        <div className="imagewrapper">
          <img src="/assets/images/01_start_Pay equity.png" alt="" />
          {/* <ReactSVG src="/assets/svgs/crosswalk.svg" /> */}
        </div>
        {/* <div className="bottom"></div> */}
      </div>
    </InView>
  );
};

export default PayEquity;
