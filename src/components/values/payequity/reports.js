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
            <Styled.h2>Reports in minutes, not months</Styled.h2>
            <div className="body">
              <Styled.p className="section1">
                Before Dandi, it often took a lot of time—and money—to generate
                new compensation reports. That made it doubly hard for
                businesses to track compensation with real speed or precision.
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
      </SubInView>
    </InView>
  );
};

export default Reports;
