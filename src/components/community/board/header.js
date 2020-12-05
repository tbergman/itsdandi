/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";

const Header = () => {
  return (
    <div
      sx={{
        variant: "pages.community.board.header",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h1>Working together to advance DEI</Styled.h1>
          <Styled.h3>
            A collective of leading thinkers and change-makers, Dandi’s DEI
            Advisory Board plays a crucial role in shaping our platform.
          </Styled.h3>
        </div>
        <div className="graphic">
          <ReactSVG src="/assets/svgs/boardtop.svg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
