/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import { rootMargin } from "../../../helpers/utils";
import InView from "../../inview";

const Customizable = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  isDesktop,
}) => {
  return (
    <InView
      variant="pages.product.collaborate.customizable"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h2>Customizable sharing controls</Styled.h2>
          <Styled.p>
            DEI data is some of the most sensitive information a company holds.
            Flexible privacy and sharing controls make sure only the right
            people have access to the right information.
          </Styled.p>
        </div>
        <div className="graphic">
          <ReactSVG src="/assets/svgs/customizable.svg" />
        </div>
      </div>
    </InView>
  );
};

export default Customizable;
