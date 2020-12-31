/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { rootMargin, rootMarginSub } from "../../../helpers/utils";
import InView from "../../inview";
import SubInView from "../../subinview";

const Reports = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  setSubMenuStyling,
  subMenuStyling,
  isDesktop,
}) => {
  return (
    <InView
      variant="pages.values.payequity.reports"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <SubInView
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={subMenuStyling}
        rootMargin={rootMarginSub(windowHeight)}
      >
        <div
          sx={{
            variant: "grid",
          }}
        >
          <div className="text">
            <div className="heading">
              <Styled.h2>Reports in minutes, not months</Styled.h2>
            </div>

            <div className="body">
              <div className="section1">
                <Styled.p>
                  Before Dandi, it often took a lot of time—and money—to
                  generate new compensation reports. That made it doubly hard
                  for businesses to track compensation with real speed or
                  precision.
                </Styled.p>
              </div>
              <div className="section2">
                <Styled.p>
                  Dandi brings you up to date by providing unlimited, on-demand
                  access to your compensation insights. Now you can run
                  continual analyses to better understand trends, track
                  initiatives, and create better future forecasts.
                </Styled.p>
              </div>
            </div>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Reports;
