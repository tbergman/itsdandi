/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const Calculator = () => {
  return (
    <div className="calculator">
      <div className="description">
        <Styled.p>
          Try our calculator to get an estimate for your organization:
        </Styled.p>
      </div>
      <div className="label">
        <Styled.p>Number of employees:</Styled.p>
        <Styled.p>450</Styled.p>
      </div>
      <div className="slider"></div>
      <div className="result">
        <Styled.h1>$1200/y</Styled.h1>
      </div>
    </div>
  );
};

export default Calculator;
