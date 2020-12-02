/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const Metrics = () => {
  return (
    <div
      sx={{
        variant: "pages.product.measure.metrics",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <Styled.h2>The metrics you’ve been missing</Styled.h2>
        <Styled.p>
          A lot of HR software can help you measure things like representation.
          Trouble is, there’s more to DEI than representation. A lot more. And
          when it comes to measuring everything else, most software doesn’t
          measure up <br />
          <br />
          With Dandi, we’ve unlocked a way to measure more of what matters for
          DEI. It’s a major step forward for any business looking to connect the
          dots between their DEI efforts and employee experience.
        </Styled.p>
      </div>
    </div>
  );
};

export default Metrics;
