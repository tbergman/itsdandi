/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Table from "./table";

const BetterInsights = () => {
  return (
    <div
      sx={{
        variant: "pages.pricing.betterinsights",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="toptext">
          <Styled.h2>Better insights. Greater value.</Styled.h2>
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
    </div>
  );
};

export default BetterInsights;
