/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const Header = () => {
  return (
    <div
      sx={{
        variant: "pages.values.leadership.header",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h1>Work’s better with Dandi</Styled.h1>
          <Styled.h3>
            Whether you’re a DEI practitioner or a leader in another part of the
            business, our tools can also help you do more every day.
          </Styled.h3>
        </div>
        <div className="graphic">
          <img src="/assets/images/leadershiptop.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
