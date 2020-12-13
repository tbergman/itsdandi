/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import InView from "../../inview";

const Metrics = ({ setNavbarStyling, navBarStyling, windowHeight }) => {
  return (
    <InView
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={`0px 0px -${windowHeight - 94}px 0px`}
      variant="pages.product.measure.metrics"
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="section1">
          <Styled.h2>The metrics you’ve been missing</Styled.h2>
        </div>
        <div className="section2">
          <Styled.p>
            A lot of HR software can help you measure things like
            representation. Trouble is, there’s more to DEI than representation.
            A lot more. And when it comes to measuring everything else, most
            software doesn’t measure up <br />
            <br />
            With Dandi, we’ve unlocked a way to measure more of what matters for
            DEI. It’s a major step forward for any business looking to connect
            the dots between their DEI efforts and employee experience.
          </Styled.p>
        </div>
      </div>
    </InView>
  );
};

export default Metrics;
