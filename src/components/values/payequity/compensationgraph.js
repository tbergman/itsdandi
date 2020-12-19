/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { rootMargin } from "../../../helpers/utils";
import InView from "../../inview";

const CompensationGraph = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
}) => {
  const data = [
    {
      city: "New York",
      max: 1.1,
      height: "80%",
    },
    {
      city: "San Diego",
      max: 1.2,
      height: "100%",
    },
    {
      city: "Boston",
      max: 0.9,
      height: "70%",
    },
    {
      city: "Dallas",
      max: 0.2,
      height: "45%",
    },
  ];
  return (
    <InView
      variant="pages.values.payequity.compensationgraph"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="wrapper">
          <div className="graph">
            <div className="maingraph">
              {data.map((dataPoint, i) => (
                <div className="yAxis" key={i}>
                  <div
                    sx={{
                      height: dataPoint.height,
                    }}
                    className="bar"
                  >
                    <Styled.h3>{`${dataPoint.max}x`}</Styled.h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="divider"></div>
            <div className="labels">
              {data.map((dataPoint, i) => (
                <div className="label" key={i}>
                  <Styled.p>{dataPoint.city}</Styled.p>
                </div>
              ))}
            </div>
          </div>
          <Styled.p className="text">
            In just a few clicks, you can see how factors like age, gender
            identity, LGBTQIA+ status, and marital status influence compensation
            at your company. Dandi also looks beyond salary to incorporate other
            forms of pay, like bonus and equity.
          </Styled.p>
        </div>
      </div>
    </InView>
  );
};

export default CompensationGraph;
