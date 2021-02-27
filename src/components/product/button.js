/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { scrollToBottom } from "../../helpers/utils";

const Button = ({ text, isDesktop }) => {
  return (
    <div
      sx={{
        variant: "components.shared.button",
      }}
    >
      <div className="button" onClick={() => scrollToBottom(window, isDesktop)}>
        <Styled.p>{text}</Styled.p>
      </div>
    </div>
  );
};

export default Button;
