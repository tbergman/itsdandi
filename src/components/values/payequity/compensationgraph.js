/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { rootMargin, rootMarginSub } from "../../../helpers/utils";
import InView from "../../inview";
import SubInView from "../../subinview";

const CompensationGraph = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  setSubMenuStyling,
  subMenuStyling,
  isDesktop,
  content,
}) => {
  const { cities, body } = content;

  return (
    <InView
      variant="pages.values.payequity.compensationgraph"
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
          <div className="wrapper">
            <div className="graph">
              <div className="maingraph">
                {cities.map((dataPoint, i) => (
                  <div className="yAxis" key={i}>
                    <div
                      sx={{
                        height: `${dataPoint.height}%`,
                      }}
                      className="bar"
                    >
                      <Styled.h3>{`${dataPoint.maxnumber}x`}</Styled.h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="divider"></div>
              <div className="labels">
                {cities.map((dataPoint, i) => (
                  <div className="label" key={i}>
                    <Styled.p>{dataPoint.city}</Styled.p>
                  </div>
                ))}
              </div>
            </div>
            <Styled.p className="text">{body}</Styled.p>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default CompensationGraph;
