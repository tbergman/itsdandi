/** @jsx jsx */
import { Button, jsx, Styled } from "theme-ui";

const Header = () => {
  return (
    <div
      sx={{
        variant: "pages.product.integrations.header",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h1>Easy integrations for better insights</Styled.h1>
          <Styled.h3>
            Dandi ties together the data in your existing HR platforms to unlock
            over 1 million new DEI insights.
          </Styled.h3>
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
