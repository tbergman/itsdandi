/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Table from "./table";
import InView from "../inview";
import { rootMargin } from "../../helpers/utils";

const BetterInsights = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  isDesktop,
  width,
}) => {
  return (
    <InView
      variant="pages.pricing.betterinsights"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
      className="BetterInsights"
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="BetterInsights__toptext">
          <Styled.h2 className="BetterInsights__toptext-heading">
            Better insights.
            <br /> Greater value.
          </Styled.h2>
          <Styled.p className="BetterInsights__toptext-body">
            Before Dandi, businesses had two main options for getting DEI
            insights—using existing software that wasn’t really built for the
            job, or building an analytics tool themselves. While the traditional
            approaches have their merits, each comes with significant tradeoffs.
            Dandi eliminates the limitations, so you can do far more for far
            less.
          </Styled.p>
        </div>
        <Table width={width} />
      </div>
    </InView>
  );
};

export default BetterInsights;
