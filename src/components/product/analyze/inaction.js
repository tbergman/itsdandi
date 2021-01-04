/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";
import { lineBreaks, rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";

const InAction = ({
  setNavbarStyling,
  navBarStyling,
  subMenuStyling,
  setSubMenuStyling,
  windowHeight,
  isDesktop,
  content,
}) => {
  const { body, header, button_text, url } = content;
  return (
    <InView
      variant="pages.product.analyze.inaction"
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
          <div className="graphic">
            <div className="placeholder"></div>
          </div>
          <div className="text">
            <div className="divider">
              <span></span>
            </div>
            <Styled.p>{lineBreaks(body)}</Styled.p>
            <div className="link">
              <LearnMoreLink href={url} text={button_text} color="#FFD93B" />
            </div>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default InAction;
