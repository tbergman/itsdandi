/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";

const Thoughtful = () => {
  return (
    <div
      sx={{
        variant: "pages.product.measure.thoughtful",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="top">
          <Styled.h2>Thoughtful thought leadership</Styled.h2>
          <Styled.p>
            Our goal in defining key DEI metrics is to help the business world
            move forward. In doing so, we’ve committed to keeping our work open
            and transparent.
            <br />
            <br /> We provide clear explanations of each definition in our
            support portal. The “What’s the math?” feature covers how we
            calculate each different metric. If your company wants to measure
            things differently, you can also modify the Dandi metrics to suit
            your specific use-cases.
            <br />
            <br /> As we work toward building more metrics over time, we’re
            partnering with a diverse panel of academics, customers, industry
            experts, and regulatory bodies.
          </Styled.p>
        </div>
        <div className="team">
          <div className="divider">
            <span />
          </div>
          <div className="header">
            <Styled.p>Meet the people behind Dandi’s definitions:</Styled.p>
          </div>
          <div className="links">
            <LearnMoreLink
              href="/"
              text={`DEI Advisory Board`}
              color="#335AFF"
            />
            <LearnMoreLink
              href="/"
              text={`Dandi leadership team`}
              color="#335AFF"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thoughtful;
