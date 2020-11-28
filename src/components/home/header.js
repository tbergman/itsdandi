/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Button from "./button";

const Header = () => {
  return (
    <div
      sx={{
        variant: "pages.home.top.header",
      }}
    >
      <Styled.h1>How business gets better for everyone</Styled.h1>
      <Button />
    </div>
  );
};

export default Header;
