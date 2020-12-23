/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { rootMargin, rootMarginSub } from "../../../helpers/utils";
import InView from "../../inview";
import SubInView from "../../subinview";

const NewInsights = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  subMenuStyling,
  setSubMenuStyling,
  isDesktop,
}) => {
  return (
    <InView
      variant="pages.product.analyze.newinsights"
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
          <div className="wrapper">
            <div className="section1">
              <Styled.h2>See what new insight can do for you</Styled.h2>
            </div>
            <div className="section2">
              <Styled.p>
                With Dandi insights at your disposal, you can start doing more
                to advance DEI. Take a deep dive on compensation. Learn where
                you need to do a better job of promoting people. See how factors
                like age, gender identity, LGBTQIA+ status, and marital status
                impact tenure.
                <br />
                <br /> The options are endless. And the more you learn, the more
                targeted you can be in your initiatives.
              </Styled.p>
            </div>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default NewInsights;
