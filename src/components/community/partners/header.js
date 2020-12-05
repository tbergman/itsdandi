/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";

const Header = () => {
  return (
    <div
      sx={{
        variant: "pages.community.partners.header",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h1>Your partners in change</Styled.h1>
          <Styled.h3>
            Dandi’s Marketplace Partners are here to help you navigate the
            challenges you meet along the way.
          </Styled.h3>
        </div>
        <div className="graphic">
          <ReactSVG src="/assets/svgs/mptop.svg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
