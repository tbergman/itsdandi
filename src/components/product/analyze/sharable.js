/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import { lineBreaks, rootMargin, rootMarginSub } from "../../../helpers/utils";
import InView from "../../inview";
import SubInView from "../../subinview";

const Sharable = ({
  setNavbarStyling,
  navBarStyling,
  subMenuStyling,
  setSubMenuStyling,
  windowHeight,
  isDesktop,
  content,
}) => {
  const { header, body } = content;
  return (
    <InView
      variant="pages.product.analyze.sharable"
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
            <ReactSVG src="/assets/svgs/sharable.svg" />
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Sharable;
