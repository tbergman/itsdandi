/** @jsx jsx  */
import { jsx, Styled } from "theme-ui";
import CompensationGraph from "./compensationgraph";
import InView from "../../inview";

const Compensation = ({ setNavbarStyling, windowHeight, navBarStyling }) => {
  return (
    <InView
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      variant="pages.values.payequity.compensation"
      rootMargin={`0px 0px -${windowHeight - 94}px 0px`}
    >
      <div
        sx={{
          variant: "grid",
          rowGap: 0,
        }}
      >
        <div className="top">
          <Styled.h2>The right way to track compensation</Styled.h2>
          <div className="body">
            <Styled.p className="section1">
              Equal pay for equal work—it’s one of the core principles of DEI,
              but actually making it happen is harder than it sounds. That’s
              because many of today’s compensation platforms and models lack the
              speed or nuance needed to deliver the right insights.
            </Styled.p>
            <Styled.p className="section2">
              That’s where Dandi’s different. Informed by leading academic
              research and industry best practices, our compensation analytics
              offers a complete view of how your people are paid.
            </Styled.p>
          </div>

          <div className="compensationTopGraphic">
            <img src="/assets/images/equitypay/compensation.png" alt="graph" />
          </div>
        </div>
      </div>
    </InView>
  );
};

export default Compensation;
