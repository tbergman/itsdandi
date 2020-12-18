/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import InView from "./inview";
import { rootMargin } from "../helpers/utils";

const Header = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  title,
  body,
  styling,
  bg,
  isDesktop,
  children,
}) => {
  return (
    <InView
      setNavbarStyling={setNavbarStyling}
      navBarStyling={{ ...navBarStyling, bg: bg }}
      rootMargin={rootMargin(isDesktop, windowHeight)}
      variant="components.shared.header"
      bg={bg ? bg : "rgba(242, 242, 242, 0.5)"}
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
