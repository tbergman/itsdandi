/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import InView from "./inview";

const Header = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  title,
  body,
  styling,
  bg,
  children,
}) => {
  const { theme } = useThemeUI();
  return (
    <InView
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={`0px 0px -${windowHeight - 94}px 0px`}
      variant="components.shared.header"
      bg="rgba(242, 242, 242, 0.5)"
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
