/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Quote from "../../quote";
import InView from "../../inview";

const QuoteSection = ({ setNavbarStyling, windowHeight }) => {
  const { theme } = useThemeUI();
  return (
    <InView
      variant="pages.values.payequity.quotesection"
      navBarStyling={theme.components.navigation.gray}
      setNavbarStyling={setNavbarStyling}
      rootMargin={`0px 0px -${windowHeight - 94}px 0px`}
    >
      <Quote
        imageUrl="/assets/images/equitypay/quoteimage_desktop.png"
        text={`Dandi measures comp the right way. Adjusted wage gap, base, bonus &
            equity`}
        name={`Name Namesson`}
        title={`Title, Company`}
        bg="#FAFAFA"
      />
    </InView>
  );
};

export default QuoteSection;
