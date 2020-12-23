/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InsightsCircle from "./insightscircle";
import InView from "../../inview";
import { rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";

const Insights = ({
  setNavbarStyling,
  navBarStyling,
  subMenuStyling,
  setSubMenuStyling,
  windowHeight,
  isDesktop,
}) => {
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
            <Styled.h2>
              The insights you’ve needed—and the ones you didn’t know you needed
            </Styled.h2>
          </div>

          <div className="middle">
            <div className="section1">
              <InsightsCircle />
            </div>
            <div className="section2">
              <div className="text">
                <Styled.p>
                  Compensation data here. Recruitment data there. Retention and
                  advancement data...somewhere else. With all your HR data in
                  different places, it’s tough to see how it all connects.{" "}
                  <br />
                  <br />
                  Dandi ties it all together, giving you a clearer picture of
                  what people in your company actually experience.
                  <br />
                  <br /> Compensation data can connect with diversity data.
                  Recruitment data can connect with attrition data. And as each
                  piece of the puzzle comes together, a whole world of new
                  insights opens up—over 1 million in total.
                </Styled.p>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="lockWrapper">
              <ReactSVG src="/assets/svgs/lock.svg" />
            </div>
            <div className="text">
              <Styled.h3>Connect with confidence</Styled.h3>
              <Styled.p>
                With Dandi, your people’s data is protected by best-in-class
                security
              </Styled.p>
              <div className="link">
                <LearnMoreLink
                  href="/"
                  text={`Learn more about Dandi security.`}
                  color="#A4F0F4"
                />
              </div>
            </div>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Insights;
