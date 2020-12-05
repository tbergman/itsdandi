/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const Person = ({ url, name, title }) => {
  return (
    <div className="person">
      <div className="imagewrapper">
        <img src={url} alt="" />
      </div>
      <div className="text">
        <Styled.p className="name">{name}</Styled.p>
        <Styled.p className="title">{title}</Styled.p>
      </div>
    </div>
  );
};
export default Person;
