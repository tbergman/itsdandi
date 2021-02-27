/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { scrollToBottom } from "../../helpers/utils";

const DemoBtn = () => {
  return (
    <div className="item demobtn">
      <Styled.p
        className="demobtn-text"
        onClick={() => scrollToBottom(window, true)}
      >
        Request a demo
      </Styled.p>
    </div>
  );
};

export default DemoBtn;
