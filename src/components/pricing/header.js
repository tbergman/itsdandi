/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";

const Header = () => {
  return (
    <div
      sx={{
        variant: "pages.pricing.header",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h1>
            Dandi is priced to work for businesses of every size
          </Styled.h1>
          <Styled.h3>
            Invest more in your people—and less in pricey software.
          </Styled.h3>
        </div>
        <div className="graphic">
          <ReactSVG src="/assets/svgs/pricinggraphic.svg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
