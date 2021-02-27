/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const DemoBtn = () => {
  return (
    <div className="item demobtn">
      <Styled.p
        className="demobtn-text"
        onClick={() => scrollToBottom(window, isDesktop)}
      >
        Request a demo
      </Styled.p>
    </div>
  );
};

export default DemoBtn;
