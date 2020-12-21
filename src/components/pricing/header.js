/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import { rootMargin } from "../../helpers/utils";
import InView from "../inview";

const Header = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  isDesktop,
}) => {
  return (
    <InView
      variant="pages.pricing.header"
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
          <Styled.h1>
            Dandi is priced to work for businesses of every size
          </Styled.h1>
          <Styled.h3>
            We keep Dandi affordable so you can invest more in your people—and
            less in pricey software.
          </Styled.h3>
        </div>
        <div className="graphic">
          <div className="box1"></div>
          <div className="box2"></div>
          <div className="box3"></div>
          {/* <ReactSVG src="/assets/svgs/pricinggraphic.svg" /> */}
        </div>
      </div>
    </InView>
  );
};

export default Header;
