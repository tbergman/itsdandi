/** @jsx jsx */
import { Button, jsx, Styled } from "theme-ui";

const Header = () => {
  return (
    <div
      sx={{
        variant: "pages.product.security.header",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h1>
            Your people data is precious. Protecting it is our top priority.
          </Styled.h1>
          <Styled.h3>Learn more about the Dandi security standard.</Styled.h3>
        </div>
        <div className="buttonWrapper">
          <Button className="button" variant="secondary">
            <Styled.p>Request a demo</Styled.p>
          </Button>
        </div>
        <div className="graphics"></div>
      </div>
    </div>
  );
};

export default Header;
