/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { lineBreaks, rootMargin, rootMarginSub } from "../../../helpers/utils";
import InView from "../../inview";
import SubInView from "../../subinview";

const WhyMeasure = ({
  windowHeight,
  setNavbarStyling,
  navBarStyling,
  subMenuStyling,
  setSubMenuStyling,
  isDesktop,
  content,
}) => {
  const { categories, header, body } = content;

  return (
    <InView
      variant="pages.product.measure.whymeasure"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <SubInView
        subMenuStyling={subMenuStyling}
        setSubMenuStyling={setSubMenuStyling}
        rootMargin={rootMarginSub(windowHeight)}
      >
        <div
          sx={{
            variant: "grid",
          }}
        >
          <div className="top">
            <div className="section1">
              <Styled.h2>{header}</Styled.h2>
            </div>
            <div className="section2">
              <Styled.p>{lineBreaks(body)}</Styled.p>
            </div>
          </div>
          <div className="categories">
            {categories.map((category, i) => (
              <div className="category" key={i}>
                <div className="divider">
                  <span
                    sx={{
                      bg: category.fields.hexcode,
                    }}
                  ></span>
                </div>
                <div className="title">
                  <Styled.p>{category.fields.title}</Styled.p>
                </div>
                <div className="items">
                  {category.fields.item.map((item, i) => (
                    <Styled.p key={i}>{item.text}</Styled.p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default WhyMeasure;
