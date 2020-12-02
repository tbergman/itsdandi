/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";

const Quote = ({ imageUrl, text, name, title, bg }) => {
  return (
    <div
      sx={{
        variant: "pages.values.quote",
        bg: bg,
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="imageWrapper">
          <img src={imageUrl} alt="" />
        </div>
        <div className="mainText">
          <ReactSVG
            className="quotationMark"
            src="/assets/svgs/quotation.svg"
          />
          <Styled.h3>{text}</Styled.h3>
          <Styled.p>
            {name}
            <br />
            {title}
          </Styled.p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
