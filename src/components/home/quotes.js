/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";

const Quotes = () => {
  return (
    <div
      sx={{
        variant: "pages.home.quotes",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="quotesImage">
          <div className="image"></div>
        </div>
        <div className="quotesText">
          <ReactSVG
            className="quotationMark"
            src="/assets/svgs/quotation.svg"
          />
          <Styled.h3>
            The right metrics drive the focus and recources for real progress.
            Dandi delivers these metrics Quickly and easily
          </Styled.h3>
          <div className="quotesSource">
            <Styled.p className="quotesName">Carol Watson</Styled.p>
            <Styled.p className="quotesTitle">
              Senior Director, Diversity Best Practices
            </Styled.p>
          </div>
        </div>
        <div className="quotesNavigation">
          <div className="prev">
            <ReactSVG src="assets/svgs/prev.svg" />
          </div>
          <div className="next">
            <ReactSVG src="assets/svgs/prev.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
