/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";

const Workflows = () => {
  const categories = [
    {
      title: `Role-based access`,
      body: `Ensure that only the right people have access to the right information.`,
    },
    {
      title: `Anonymous data`,
      body: `Dandi doesn’t collect any personally identifiable information (PII).`,
    },
    {
      title: `Granular sharing controls`,
      body: `Manage sharing and communication as needed.`,
    },
  ];
  return (
    <div
      sx={{
        variant: "pages.product.security.workflows",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="toptext">
          <Styled.h2>Keeping workflows secure</Styled.h2>
          <Styled.p>
            With Dandi, you can be sure that sensitive information never travels
            further than it should.
          </Styled.p>
        </div>
        <div className="categories">
          <div className="graphic">
            <ReactSVG src="/assets/svgs/securitygraphic.svg" />
          </div>
          {categories.map((category, i) => (
            <div className="category" key={i}>
              <Styled.p className="title">{category.title}</Styled.p>
              <Styled.p className="body">{category.body}</Styled.p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflows;
