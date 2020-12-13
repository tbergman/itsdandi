/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import InView from "./inview";
import { ReactSVG } from "react-svg";

const Quote = ({
  setNavbarStyling,
  windowHeight,
  bg,
  navBarStyling,
  imageUrl,
  name,
  title,
  text,
}) => {
  const { theme } = useThemeUI();
  return (
    <InView
      variant="components.shared.quote"
      navBarStyling={navBarStyling}
      setNavbarStyling={setNavbarStyling}
      rootMargin={`0px 0px -${windowHeight - 94}px 0px`}
      bg={bg}
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
    </InView>
  );
};

export default Quote;
