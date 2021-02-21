/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import InView from "../../inview";
import Quote from "../../quote";

const QuoteSection = ({ setNavbarStyling, windowHeight }) => {
  const { theme } = useThemeUI();
  return (
    <InView
      variant="pages.values.leadership.quotesection"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={theme.components.navigation.variants.yellow}
      rootMargin={`0px 0px -${windowHeight - 94}px 0px`}
    >
      <Quote
        imageUrl={"/assets/images/tamarcus-brown.png"}
        text={`Dandi measures comp the right way. Adjusted wage gap, base, bonus & equity`}
        name={`Name Namesson`}
        title={`Title, Company`}
        bg={theme.colors.yellow}
      />
    </InView>
  );
};

export default QuoteSection;
