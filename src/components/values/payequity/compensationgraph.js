/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const CompensationGraph = () => {
  const data = [
    {
      city: "New York",
      max: 1.1,
    },
    {
      city: "San Diego",
      max: 1.2,
    },
    {
      city: "Boston",
      max: 0.9,
    },
    {
      city: "Dallas",
      max: 0.2,
    },
  ];
  return (
    <div className="compensationGraph">
      {data.map((dataPoint, i) => (
        <div className="dataPoint" key={i}>
          <div className="yAxis">
            <Styled.h3>{`${dataPoint.max}x`}</Styled.h3>
          </div>
          <Styled.p>{dataPoint.city}</Styled.p>
        </div>
      ))}
    </div>
  );
};

export default CompensationGraph;
