/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";

const Header = () => {
  return (
    <div
      sx={{
        variant: "pages.values.deijourney.header",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="top">
          <Styled.h1>
            DEI is a journey. Dandi works with you every step of the way.
          </Styled.h1>
          <Styled.h3>
            Whether your business is just starting to focus on DEI or already
            has programs underway, Dandi has the flexibility to meet you where
            you are.
          </Styled.h3>
        </div>
        <div className="graphic">
          <ReactSVG src="/assets/svgs/deijourneytop.svg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
