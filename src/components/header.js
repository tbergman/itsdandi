/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import InView from "./inview";
import SubInView from "./subinview";
import { rootMargin, rootMarginSub } from "../helpers/utils";

const Header = ({
  setNavbarStyling,
  navBarStyling,
  setSubMenuStyling,
  subMenuStyling,
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
      <SubInView
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={subMenuStyling}
        rootMargin={rootMarginSub(windowHeight)}
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
      </SubInView>
    </InView>
  );
};

export default Header;
