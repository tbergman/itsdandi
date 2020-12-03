/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const NewInsights = () => {
  return (
    <div
      sx={{
        variant: "pages.product.analyze.newinsights",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <Styled.h2>See what new insight can do for you</Styled.h2>
        <Styled.p>
          With Dandi insights at your disposal, you can start doing more to
          advance DEI. Take a deep dive on compensation. Learn where you need to
          do a better job of promoting people. See how factors like age, gender
          identity, LGBTQIA+ status, and marital status impact tenure.
          <br />
          <br /> The options are endless. And the more you learn, the more
          targeted you can be in your initiatives.
        </Styled.p>
      </div>
    </div>
  );
};

export default NewInsights;
