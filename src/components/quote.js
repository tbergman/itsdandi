/** @jsx jsx */

import { ReactSVG } from "react-svg";
import { jsx, Styled, useThemeUI } from "theme-ui";

const Quote = ({ imageUrl, text, name, title, bg }) => {
  const { theme } = useThemeUI();
  return (
    <div
      sx={{
        variant: "components.shared.quote",
        bg: bg,
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="imagewrapper">
          <img src={imageUrl} alt="" />
        </div>
        <div className="text">
          <ReactSVG className="quotation" src="/assets/svgs/quotation.svg" />
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
