/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";

const Affordable = () => {
  return (
    <div
      sx={{
        variant: "pages.values.payequity.affordable",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="header">
          <Styled.h2>Affordable by design</Styled.h2>
          <Styled.p>
            Dandi’s priced to work for businesses of every size.
          </Styled.p>
          <div className="affordableLink">
            <LearnMoreLink
              href="/pricing"
              text="Learn more about Dandi pricing."
              color="#335AFF"
            />
          </div>
        </div>
        <div className="graphic">
          <div className="placeholder"></div>
        </div>
      </div>
    </div>
  );
};

export default Affordable;
