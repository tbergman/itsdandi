/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";
import { lineBreaks, rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";

const Curious = ({
  setNavbarStyling,
  navBarStyling,
  subMenuStyling,
  setSubMenuStyling,
  windowHeight,
  isDesktop,
  content,
}) => {
  const { header1, body1, header2, body2, button_text, url } = content;
  return (
    <InView
      variant="pages.community.partners.curious"
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
          <div className="row1">
            <div className="section1">
              <Styled.h2>{header1}</Styled.h2>
            </div>
            <div className="section2">
              <Styled.p>{lineBreaks(body1)}</Styled.p>
            </div>
          </div>

          <div className="row2">
            <div className="section1">
              <Styled.h2>{header2}</Styled.h2>
            </div>
            <div className="section2">
              <Styled.p>{lineBreaks(body2)}</Styled.p>
              <div className="link">
                <LearnMoreLink href={url} text={button_text} color="#335AFF" />
              </div>
            </div>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Curious;
