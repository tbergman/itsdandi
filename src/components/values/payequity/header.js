/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import theme from "../../../../theme";
import InView from "../../inview";

const Header = ({ setNavbarStyling, windowHeight }) => {
  const { theme } = useThemeUI();
  return (
    <InView
      setNavbarStyling={setNavbarStyling}
      navBarStyling={theme.components.navigation.white}
      rootMargin={`0px 0px -${windowHeight - 94}px 0px`}
      variant="pages.values.payequity.header"
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="headerText">
          <Styled.h1>Dandi makes pay equity possible</Styled.h1>
          <Styled.h3>
            With sophisticated compensation analytics built right in, Dandi
            helps you find the pay gaps at your company—and make them disappear.
          </Styled.h3>
        </div>
        <div className="headerGraphic">
          <div className="headerImage"></div>
        </div>
      </div>
    </InView>
  );
};

export default Header;
