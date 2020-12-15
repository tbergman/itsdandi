/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Table from "./table";
import InView from "../inview";

const BetterInsights = ({ setNavbarStyling, navBarStyling, windowHeight }) => {
  return (
    <InView
      variant="pages.pricing.betterinsights"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={`0px 0px -${windowHeight - 94}px 0px`}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="toptext">
          <Styled.h2>
            Better insights.
            <br /> Greater value.
          </Styled.h2>
          <Styled.p>
            Before Dandi, businesses had two main options for getting DEI
            insights—using existing software that wasn’t really built for the
            job, or building an analytics tool themselves. While the traditional
            approaches have their merits, each comes with significant tradeoffs.
            Dandi eliminates the limitations, so you can do far more for far
            less.
          </Styled.p>
        </div>
        <Table />
      </div>
    </InView>
  );
};

export default BetterInsights;
