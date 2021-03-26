/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useMachine } from "@xstate/react";
import { Calculator__machine } from "../../machines/pricing";

const Calculator = ({ description, label }) => {
  const [state, send] = useMachine(Calculator__machine);
  const {
    context: { employees, price },
  } = state;

  return (
    <div className="calculator">
      <div className="description">
        <Styled.p>{description}</Styled.p>
      </div>
      <div className="label">
        <Styled.p>{label}</Styled.p>
        <Styled.p>{`${employees.toLocaleString()}${
          employees === 10000 ? "+" : ""
        }`}</Styled.p>
      </div>
      <div className="slider">
        <input
          type="range"
          value={employees}
          onChange={(e) =>
            send({
              type: "UPDATE",
              payload: {
                event: {
                  ...e,
                },
              },
            })
          }
          min={0}
          max={10000}
        />
      </div>
      <div className="result">
        <Styled.h1>{`$${price.toLocaleString()}${
          price === 100000 ? "+" : ""
        }/y`}</Styled.h1>
      </div>
    </div>
  );
};

export default Calculator;
