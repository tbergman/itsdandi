/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const Header = () => {
  return (
    <div
      sx={{
        variant: "pages.values.payequity.header",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="headerText">
          <Styled.h1>Dandi makes pay equity possible</Styled.h1>
          <Styled.h4>
            With sophisticated compensation analytics built right in, Dandi
            helps you find the pay gaps at your company—and make them disappear.
          </Styled.h4>
        </div>
        <div className="headerGraphic">
          <div className="headerImage"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
