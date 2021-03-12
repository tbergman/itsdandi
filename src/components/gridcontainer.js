/** @jsx jsx */
import { jsx } from "theme-ui";
import { rootMargin, rootMarginSub } from "../helpers/utils";
import InView from "./inview";
import SubInView from "./subinview";

const GridContainer = ({
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
      className="GridContainer"
    >
      <SubInView
        subMenuStyling={subMenuStyling}
        setSubMenuStyling={setSubMenuStyling}
        rootMargin={rootMarginSub(windowHeight)}
      >
        <div
          sx={{
            variant: "grid",
            bg: bg ? `${bg} !important` : null,
          }}
          className="GridContainer"
        >
          {children}
        </div>
      </SubInView>
    </InView>
  );
};

export default GridContainer;
