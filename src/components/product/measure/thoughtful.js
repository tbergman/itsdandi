/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";
import devices from "../../../helpers/devices";
import { rootMargin } from "../../../helpers/utils";

const Thoughtful = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  isDesktop,
}) => {
  return (
    <InView
      variant="pages.product.measure.thoughtful"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="section1">
          <Styled.h2>Thoughtful thought leadership</Styled.h2>
          <Styled.p>
            Our goal in defining key DEI metrics is to help the business world
            move forward. In doing so, we’ve committed to keeping our work open
            and transparent.
            <br />
            <br /> We provide clear explanations of each definition in our
            support portal. The “What’s the math?” feature covers how we
            calculate each different metric. If your company wants to measure
            things differently, you can also modify the Dandi metrics to suit
            your specific use-cases.
          </Styled.p>
        </div>
        <div className="section2">
          <div className="text">
            <Styled.p>
              As we work toward building more metrics over time, we’re
              partnering with a diverse panel of academics, customers, industry
              experts, and regulatory bodies.
            </Styled.p>
          </div>
          <div className="team">
            <div className="divider">
              <span />
            </div>
            <div className="header">
              <Styled.p>Meet the people behind Dandi’s definitions:</Styled.p>
            </div>
            <div className="links">
              <LearnMoreLink
                href="/"
                text={`DEI Advisory Board`}
                color="#335AFF"
              />
              <LearnMoreLink
                href="/"
                text={`Dandi leadership team`}
                color="#335AFF"
              />
            </div>
          </div>
        </div>
      </div>
    </InView>
  );
};

export default Thoughtful;
