/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import { rootMargin, rootMarginSub, lineBreaks } from "../../../helpers/utils";
import InView from "../../inview";
import SubInView from "../../subinview";

const Customizable = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  subMenuStyling,
  setSubMenuStyling,
  isDesktop,
  content,
}) => {
  const { header, body } = content;
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
            <Styled.h2>{header}</Styled.h2>
            <Styled.p>{lineBreaks(body)}</Styled.p>
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
