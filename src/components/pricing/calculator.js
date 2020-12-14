/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useState } from "react";

const Calculator = () => {
  const [employees, setEmployees] = useState(0);
  return (
    <div className="calculator">
      <div className="description">
        <Styled.p>
          Try our calculator to get an estimate for your organization:
        </Styled.p>
      </div>
      <div className="label">
        <Styled.p>Number of employees:</Styled.p>
        <Styled.p>{employees}</Styled.p>
      </div>
      <div className="slider">
        <input
          type="range"
          value={employees}
          onChange={(e) => setEmployees(e.target.value)}
          min={0}
          max={1000}
        />
      </div>
      <div className="result">
        <Styled.h1>{`$${employees * 25}/y`}</Styled.h1>
      </div>
    </div>
  );
};

export default Calculator;
