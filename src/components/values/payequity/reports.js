/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const Reports = () => {
  return (
    <div
      sx={{
        variant: "pages.values.payequity.reports",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="reportsText">
          <Styled.h2>Reports in minutes, not months</Styled.h2>
          <Styled.p>
            Before Dandi, it often took a lot of time—and money—to generate new
            compensation reports. That made it doubly hard for businesses to
            track compensation with real speed or precision. <br />
            <br />
            Dandi brings you up to date by providing unlimited, on-demand access
            to your compensation insights. Now you can run continual analyses to
            better understand trends, track initiatives, and create better
            future forecasts.
          </Styled.p>
        </div>
      </div>
    </div>
  );
};

export default Reports;
