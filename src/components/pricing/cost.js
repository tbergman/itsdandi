/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Calculator from "./calculator";
import InView from "../inview";
import { lineBreaks, rootMargin } from "../../helpers/utils";

const Cost = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  isDesktop,
  content,
}) => {
  const {
    body,
    list_title,
    list_items,
    calculator_description,
    calculator_label,
  } = content;
  const bullets = [
    `Our customers are billed annually. We charge $10 per employee, per year.`,
    `There is also a one-time implementation fee, and a monthly data processing charge`,
  ];
  return (
    <InView
      variant="pages.pricing.cost"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="section1">
          <div className="toptext">
            <Styled.p>{lineBreaks(body)}</Styled.p>
          </div>
          <div className="list">
            <Styled.p className="title">{list_title}</Styled.p>
            <ul>
              {list_items.map((item, i) => (
                <li className="item" key={i}>
                  <Styled.p>{item.text}</Styled.p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section2">
          <Calculator
            description={calculator_description}
            label={calculator_label}
          />
        </div>
      </div>
    </InView>
  );
};

export default Cost;
