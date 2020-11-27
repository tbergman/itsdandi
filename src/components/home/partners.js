/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const Partners = () => {
  return (
    <div
      sx={{
        variant: "pages.home.partners",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="partnersHeader">
          <Styled.h2>Serious about change? You're in good company. </Styled.h2>
        </div>
        <div className="logoCarousel">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
