/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import InView from "./inview";

const Header = ({
  setNavbarStyling,
  windowHeight,
  title,
  body,
  styling,
  children,
}) => {
  const { theme } = useThemeUI();
  return (
    <InView
      setNavbarStyling={setNavbarStyling}
      navBarStyling={theme.components.navigation.white}
      rootMargin={`0px 0px -${windowHeight - 94}px 0px`}
      variant="components.shared.header"
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div
          sx={{
            ...styling,
          }}
          className="text"
        >
          <Styled.h1>{title}</Styled.h1>
          <Styled.h3>{body}</Styled.h3>
        </div>
        <div className="graphic">{children}</div>
      </div>
    </InView>
  );
};

export default Header;
