/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { rootMargin, rootMarginSub } from "../../helpers/utils";
import InView from "../inview";
import SubInView from "../subinview";

const CenteredContainer = ({
  setNavbarStyling,
  navBarStyling,
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
      variant="components.containers.centered"
    >
      <SubInView
        subMenuStyling={subMenuStyling}
        setSubMenuStyling={setSubMenuStyling}
        rootMargin={rootMarginSub(windowHeight)}
      >
        <div
          sx={{
            variant: "grid",
          }}
          className="CenteredContainer"
        >
          <div className="container">{children}</div>
        </div>
      </SubInView>
    </InView>
  );
};

export default CenteredContainer;
