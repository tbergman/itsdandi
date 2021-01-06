/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import { lineBreaks, rootMargin } from "../../helpers/utils";
import InView from "../inview";

const Header = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  isDesktop,
  content,
}) => {
  const { header, body } = content;
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
          <Styled.h1>{header}</Styled.h1>
          <Styled.h3>{lineBreaks(body)}</Styled.h3>
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
