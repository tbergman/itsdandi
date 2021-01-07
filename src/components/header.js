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
  styling,
  content,
  bg,
  isDesktop,
  children,
}) => {
  const { header, body } = content;
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
          className="Header"
        >
          <div
            sx={{
              ...styling,
            }}
            className="Header__text"
          >
            <Styled.h1 className="Header__text-header">{header}</Styled.h1>
            <Styled.h3 className="Header__text-body">{body}</Styled.h3>
          </div>
          <div className="Header__graphic">{children}</div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Header;
