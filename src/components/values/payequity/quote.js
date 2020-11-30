/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";

const Quote = () => {
  return (
    <div
      sx={{
        variant: "pages.values.payequity.quote",
      }}
    >
      <div
        sx={{
          variant: "grid",
          rowGap: 0,
        }}
      >
        <div className="imageWrapper">
          <img src="/assets/images/tamarcus-brown.png" alt="" />
        </div>
        <div className="mainText">
          <ReactSVG
            className="quotationMark"
            src="/assets/svgs/quotation.svg"
          />
          <Styled.h3>
            Dandi measures comp the right way. Adjusted wage gap, base, bonus &
            equity
          </Styled.h3>
          <Styled.p>
            Name Namesson
            <br />
            Title, Company
          </Styled.p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
