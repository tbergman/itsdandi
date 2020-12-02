/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const WhyMeasure = () => {
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
    <div
      sx={{
        variant: "pages.product.measure.whymeasure",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="top">
          <Styled.h2>Why measurement matters for DEI</Styled.h2>
          <Styled.p>
            Most areas of business have widely-recognized metrics. For instance,
            accounting has a full glossary of terms that are used to explain
            different aspects of financial performance. But, beyond some
            foundational terms like representation, there are few DEI metrics
            with industry-wide acceptance. And it’s held back progress for DEI
            as a whole. <br />
            <br />
            That’s why Dandi has gone ahead and provided metrics for nearly a
            dozen key areas related to DEI.
          </Styled.p>
        </div>
        <div className="categories">
          {categories.map((category, i) => (
            <div className="categoryWrapper" key={i}>
              <div className="divider">
                <span
                  sx={{
                    bg: category.color,
                  }}
                ></span>
              </div>
              <div className="category">
                <div className="left">
                  <Styled.p>{category.title}</Styled.p>
                </div>
                <div className="right">
                  {category.items.map((item, i) => (
                    <Styled.p key={i}>{item}</Styled.p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyMeasure;
