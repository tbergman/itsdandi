/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const Person = ({ images, name, title }) => {
  return (
    <div className="person">
      <div className="imagewrapper">
        <picture>
          <source media="(min-width: 800px)" srcSet={images.desktop}></source>
          <source srcSet={images.mobile}></source>
          <img src={images.desktop} alt="" />
        </picture>
      </div>
      <div className="text">
        <Styled.p className="name">{name}</Styled.p>
        <Styled.p className="title">{title}</Styled.p>
      </div>
    </div>
  );
};
export default Person;
