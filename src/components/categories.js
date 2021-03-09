/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const Categories = ({ categories }) => {
  return (
    <div
      sx={{
        variant: "components.categories",
      }}
      className="categories"
    >
      {categories.map((category, i) => (
        <div className="categories__category" key={i}>
          <div className="categories__divider">
            <span
              sx={{
                bg: category.fields.hexcode,
              }}
            ></span>
          </div>
          <div className="categories__title">
            <Styled.p>{category.fields.title}</Styled.p>
          </div>
          <div className="categories__items">
            {category.fields.item.map((item, i) => (
              <div className="categories__item" key={i}>
                <Styled.p className="categories__text">{item.text}</Styled.p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
