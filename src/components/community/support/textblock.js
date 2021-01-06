/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const TextBlock = ({ title, description, listTitle, listItems }) => {
  return (
    <div className="textblock">
      <div className="divider">
        <span></span>
      </div>
      <div className="toptext">
        <Styled.h2>{title}</Styled.h2>
        <Styled.p>{description}</Styled.p>
      </div>
      <div className="list">
        <Styled.p className="listtitle">{listTitle}</Styled.p>
        <div className="listbox">
          {listItems.map((item, i) => (
            <div className="listitem" key={i}>
              <Styled.p>{item.text}</Styled.p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextBlock;
