/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import InView from "../../inview";

const WhyMeasure = ({ windowHeight, setNavbarStyling, navBarStyling }) => {
  const { theme } = useThemeUI();
  const categories = [
    {
      color: "#FFD93B",
      title: `Diversity`,
      items: ["Representation", "Hiring", "Recruiting"],
    },
    {
      color: "#F9D2FF",
      title: `Equity`,
      items: ["Compensation", "Promotions", "Career mobility", "Performance"],
    },
    {
      color: "#A4F0F4",
      title: `Inclusion`,
      items: ["Sentiment", "Attrition", "Retention", "Learning penetration"],
    },
  ];
  return (
    <InView
      variant="pages.product.measure.whymeasure"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={`0px 0px -${windowHeight - 94}px 0px`}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="top">
          <div className="section1">
            <Styled.h2>Why measurement matters for DEI</Styled.h2>
          </div>
          <div className="section2">
            <Styled.p>
              Most areas of business have widely-recognized metrics. For
              instance, accounting has a full glossary of terms that are used to
              explain different aspects of financial performance. But, beyond
              some foundational terms like representation, there are few DEI
              metrics with industry-wide acceptance. And it’s held back progress
              for DEI as a whole. <br />
              <br />
              That’s why Dandi has gone ahead and provided metrics for nearly a
              dozen key areas related to DEI.
            </Styled.p>
          </div>
        </div>
        <div className="categories">
          {categories.map((category, i) => (
            <div className="category" key={i}>
              <div className="divider">
                <span
                  sx={{
                    bg: category.color,
                  }}
                ></span>
              </div>
              <div className="title">
                <Styled.p>{category.title}</Styled.p>
              </div>
              <div className="items">
                {category.items.map((item, i) => (
                  <Styled.p key={i}>{item}</Styled.p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </InView>
  );
};

export default WhyMeasure;
