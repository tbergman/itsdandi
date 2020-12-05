/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const Header = () => {
  return (
    <div
      sx={{
        variant: "pages.community.support.header",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h1>The support you need to advance DEI</Styled.h1>
          <Styled.h3>
            Some software companies are hands-off. But that’s not Dandi.
          </Styled.h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
