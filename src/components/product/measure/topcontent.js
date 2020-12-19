/** @jsx jsx  */
import { jsx } from "theme-ui";
import Button from "../button";

const TopContent = () => {
  return (
    <div className="topcontent">
      <div className="button">
        <Button url="/" text={`Request a demo`} />
      </div>

      <div className="graphics"></div>
    </div>
  );
};

export default TopContent;
