/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Calculator from "./calculator";

const Cost = () => {
  const bullets = [
    `Our customers are billed annually. We charge $10 per employee, per year.`,
    `There is also a one-time implementation fee, and a monthly data processing charge`,
  ];
  return (
    <div
      sx={{
        variant: "pages.pricing.cost",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="toptext">
          <Styled.p>
            Cost can stop you from doing the things you want to do. And in the
            case of DEI, it’s often cited as one of the main barriers to
            success. But it needn’t be the case. That’s why we’ve priced Dandi
            to be affordable for businesses of every size.
          </Styled.p>
        </div>
        <div className="list">
          <Styled.p className="title">Here’s how it works:</Styled.p>
          <ul>
            {bullets.map((item, i) => (
              <li className="item" key={i}>
                <Styled.p>{item}</Styled.p>
              </li>
            ))}
          </ul>
        </div>
        <Calculator />
      </div>
    </div>
  );
};

export default Cost;
