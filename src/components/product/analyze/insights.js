/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InsightsCircle from "./insightscircle";
import InView from "../../inview";
import { lineBreaks, rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";

const Insights = ({
  setNavbarStyling,
  navBarStyling,
  subMenuStyling,
  setSubMenuStyling,
  windowHeight,
  isDesktop,
  content,
}) => {
  const { header, body, lock_title, lock_body, button_text, url } = content;
  return (
    <InView
      variant="pages.product.analyze.insights"
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
          <div className="top">
            <Styled.h2>{header}</Styled.h2>
          </div>

          <div className="middle">
            <div className="section1">
              <InsightsCircle />
            </div>
            <div className="section2">
              <div className="text">
                <Styled.p>{lineBreaks(body)}</Styled.p>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="lockWrapper">
              <ReactSVG src="/assets/svgs/lock.svg" />
            </div>
            <div className="text">
              <Styled.h3>{lock_title}</Styled.h3>
              <Styled.p>{lock_body}</Styled.p>
              <div className="link">
                <LearnMoreLink href={url} text={button_text} color="#A4F0F4" />
              </div>
            </div>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Insights;
