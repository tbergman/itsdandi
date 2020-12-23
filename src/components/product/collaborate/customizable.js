/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import { rootMargin, rootMarginSub } from "../../../helpers/utils";
import InView from "../../inview";
import SubInView from "../../subinview";

const Customizable = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  subMenuStyling,
  setSubMenuStyling,
  isDesktop,
}) => {
  return (
    <InView
      variant="pages.product.collaborate.customizable"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
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
        >
          <div className="text">
            <Styled.h2>Customizable sharing controls</Styled.h2>
            <Styled.p>
              DEI data is some of the most sensitive information a company
              holds. Flexible privacy and sharing controls make sure only the
              right people have access to the right information.
            </Styled.p>
          </div>
          <div className="graphic">
            <ReactSVG src="/assets/svgs/customizable.svg" />
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Customizable;
