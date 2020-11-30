/** @jsx jsx  */
import { jsx, Styled } from "theme-ui";
import CompensationGraph from "./compensationgraph";

const Compensation = () => {
  return (
    <div
      sx={{
        variant: "pages.values.payequity.compensation",
      }}
    >
      <div
        sx={{
          variant: "grid",
          rowGap: 0,
        }}
      >
        <div className="compensationTop">
          <Styled.h2>The right way to track compensation</Styled.h2>
          <Styled.p>
            Equal pay for equal work—it’s one of the core principles of DEI, but
            actually making it happen is harder than it sounds. That’s because
            many of today’s compensation platforms and models lack the speed or
            nuance needed to deliver the right insights. <br />
            <br />
            That’s where Dandi’s different. Informed by leading academic
            research and industry best practices, our compensation analytics
            offers a complete view of how your people are paid.
          </Styled.p>
          <div className="compensationTopGraphic">
            <img src="/assets/images/compensation_graph1.png" alt="graph" />
          </div>
        </div>
        <div className="compensationBottom">
          <Styled.p className="text">
            In just a few clicks, you can see how factors like age, gender
            identity, LGBTQIA+ status, and marital status influence compensation
            at your company. Dandi also looks beyond salary to incorporate other
            forms of pay, like bonus and equity.
          </Styled.p>
          <CompensationGraph />
        </div>
      </div>
    </div>
  );
};

export default Compensation;
