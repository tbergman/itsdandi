/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";
import theme from "../../../../theme";
import { rootMargin } from "../../../helpers/utils";

const Affordable = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
}) => {
  const { theme } = useThemeUI();
  return (
    <InView
      variant="pages.values.payequity.affordable"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
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
