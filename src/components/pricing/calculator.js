/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useState } from "react";

const Calculator = ({ description, label }) => {
  const [employees, setEmployees] = useState(500);
  return (
    <div className="calculator">
      <div className="description">
        <Styled.p>{description}</Styled.p>
      </div>
      <div className="label">
        <Styled.p>{label}</Styled.p>
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
        <Styled.h1>{`$${(employees * 25).toLocaleString()}/y`}</Styled.h1>
      </div>
    </div>
  );
};

export default Calculator;
