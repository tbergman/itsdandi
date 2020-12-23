/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";
import { rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";

const InAction = ({
  setNavbarStyling,
  navBarStyling,
  subMenuStyling,
  setSubMenuStyling,
  windowHeight,
  isDesktop,
}) => {
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
            <Styled.p>
              Want to see Dandi analytics in action? <br />
              with a sample data set here:
            </Styled.p>
            <div className="link">
              <LearnMoreLink href="/" text={`Try Dandi out`} color="#FFD93B" />
            </div>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default InAction;
