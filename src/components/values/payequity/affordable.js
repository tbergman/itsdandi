/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";
import theme from "../../../../theme";

const Affordable = ({ setNavbarStyling, windowHeight }) => {
  const { theme } = useThemeUI();
  return (
    <InView
      variant="pages.values.payequity.affordable"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={theme.components.navigation.white}
      rootMargin={`
      0px 0px -${windowHeight - 94}px 0px`}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="header">
          <Styled.h2>Affordable by design</Styled.h2>
          <Styled.p>
            Dandi’s priced to work for businesses of every size.
          </Styled.p>
          <div className="link">
            <LearnMoreLink
              href="/pricing"
              text="Learn more about Dandi pricing."
              color="#335AFF"
            />
          </div>
        </div>
        <div className="graphic">
          <img src="/assets/images/02_1_affordable.png" alt="" />
        </div>
      </div>
    </InView>
  );
};

export default Affordable;
