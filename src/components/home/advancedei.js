/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../learnmorelink";

const AdvanceDEI = () => {
  return (
    <div
      sx={{
        variant: "pages.home.advancedei",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="advancedeiHeader">
          <Styled.h2>Advancing DEI, every step of the way</Styled.h2>
          <Styled.p className="advancedeiSub">
            Whether your business is just starting its DEI initiatives or
            already has programs underway, Dandi has the flexibility to meet you
            where you are.
          </Styled.p>
          <div className="advancedeiLink">
            <LearnMoreLink
              href="/"
              text="Learn more about the DEI journey."
              color="#1A1A1D"
            />
          </div>
        </div>
        <div className="advancedeiGraphics">
          <div className="advancedeiBox1"></div>
          <div className="advancedeiBox2"></div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceDEI;
