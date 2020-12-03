/** @jsx jsx */
import { Button, jsx, Styled } from "theme-ui";

const Header = () => {
  return (
    <div
      sx={{
        variant: "pages.product.collaborate.header",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h1>Unlocking the power of collaboration</Styled.h1>
          <Styled.h3>
            With everyone working in Dandi, conversations get more productive
            and progress happens faster.
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
