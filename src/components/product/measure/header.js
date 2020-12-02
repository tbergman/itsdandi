/** @jsx jsx */
import { Button, jsx, Styled } from "theme-ui";

const Header = () => {
  return (
    <div
      sx={{
        variant: "pages.product.measure.header",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h1>DEI, made to measure</Styled.h1>
          <Styled.h3>
            Simple. Precise. Eye-opening. Dandi sets the new standard for DEI
            measurement.
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
