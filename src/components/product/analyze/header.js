/** @jsx jsx */
import { Button, jsx, Styled } from "theme-ui";

const Header = () => {
  return (
    <div
      sx={{
        variant: "pages.product.analyze.header",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h1>See what your HR data’s trying to tell you</Styled.h1>
          <Styled.h3>
            Dandi helps you understand your people data in a whole new way.
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
