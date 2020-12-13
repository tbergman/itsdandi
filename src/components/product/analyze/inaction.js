/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";

const InAction = ({ setNavbarStyling, navBarStyling, windowHeight }) => {
  return (
    <InView
      variant="pages.product.analyze.inaction"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={`0px 0px -${windowHeight - 94}px 0px`}
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
    </InView>
  );
};

export default InAction;
