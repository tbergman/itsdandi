/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import InView from "../../inview";

const Sharable = ({ setNavbarStyling, navBarStyling, windowHeight }) => {
  return (
    <InView
      variant="pages.product.analyze.sharable"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={`0px 0px -${windowHeight - 94}px 0px`}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h2>Shareable by design</Styled.h2>
          <Styled.p>
            Insights only make an impact if the right people see them. That’s
            why Dandi makes it easy to share beautifully designed charts and
            visualizations.
            <br />
            <br /> Add your findings to reports and presentations in a snap. In
            the future, you’ll be able to schedule publication of key visuals so
            the right people can always stay in the loop.
          </Styled.p>
        </div>
        <div className="graphic">
          <ReactSVG src="/assets/svgs/sharable.svg" />
        </div>
      </div>
    </InView>
  );
};

export default Sharable;
