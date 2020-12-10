/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import InView from "../../inview";

const Reports = ({ setNavbarStyling, windowHeight }) => {
  const { theme } = useThemeUI();
  return (
    <InView
      variant="pages.values.payequity.reports"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={theme.components.navigation.white}
      rootMargin={`0px 0px -${windowHeight - 94}px 0px`}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h2>Reports in minutes, not months</Styled.h2>
          <div className="body">
            <Styled.p className="section1">
              Before Dandi, it often took a lot of time—and money—to generate
              new compensation reports. That made it doubly hard for businesses
              to track compensation with real speed or precision.
            </Styled.p>
            <Styled.p className="section2">
              Dandi brings you up to date by providing unlimited, on-demand
              access to your compensation insights. Now you can run continual
              analyses to better understand trends, track initiatives, and
              create better future forecasts.
            </Styled.p>
          </div>
        </div>
      </div>
    </InView>
  );
};

export default Reports;
