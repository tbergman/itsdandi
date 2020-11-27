/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

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
          <Styled.p>
            Whether your business is just starting its DEI initiatives or
            already has programs underway, Dandi has the flexibility to meet you
            where you are.
          </Styled.p>
        </div>
      </div>
    </div>
  );
};

export default AdvanceDEI;
