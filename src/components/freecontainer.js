/** @jsx jsx */
import { jsx } from "theme-ui";
import { rootMargin, rootMarginSub } from "../helpers/utils";
import InView from "./inview";
import SubInView from "./subinview";

const FreeContainer = ({
  setNavbarStyling,
  navBarStyling,
  bg,
  windowHeight,
  subMenuStyling,
  setSubMenuStyling,
  isDesktop,
  children,
}) => {
  return (
    <InView
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
      bg={bg}
      className=""
    >
      <SubInView
        subMenuStyling={subMenuStyling}
        setSubMenuStyling={setSubMenuStyling}
        rootMargin={rootMarginSub(windowHeight)}
      >
        <div
          sx={{
            bg: bg ? `${bg} !important` : null,
          }}
          className="FreeContainer"
        >
          {children}
        </div>
      </SubInView>
    </InView>
  );
};

export default FreeContainer;
