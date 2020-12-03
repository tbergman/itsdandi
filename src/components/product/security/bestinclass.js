/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const BestInClass = () => {
  const modules = [
    {
      length: "50%",
      title: `GDPR compliant`,
      body: `No matter where your people are, their data is secure. `,
      color: "#A4F0F4",
    },
    {
      length: "60%",
      title: `Full encryption`,
      body: `All data is encrypted at rest and in transit.`,
      color: "#FFD93B",
    },
    {
      length: "100%",
      title: `SOC 2 compliant`,
      body: `A full suite of features that meet AICPA SOC 2 trust service protocols.`,
      color: "#F9D2FF",
    },
  ];
  return (
    <div
      sx={{
        variant: "pages.product.security.bestinclass",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="topText">
          <Styled.h2>Best-in-class data protection</Styled.h2>
          <Styled.p>
            We’ve built industry-accepted best practices into every layer of
            Dandi, and continue to evolve as rules and regulations change.
          </Styled.p>
        </div>
        <div className="modules">
          {modules.map((module, i) => (
            <div className="module" key={i}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestInClass;
