/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import { rootMargin, rootMarginSub } from "../../../helpers/utils";
import InView from "../../inview";
import SubInView from "../../subinview";

const Workflows = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  subMenuStyling,
  setSubMenuStyling,
  isDesktop,
}) => {
  const categories = [
    {
      title: `Role-based access`,
      body: `Ensure that only the right people have access to the right information.`,
    },
    {
      title: `Anonymous data`,
      body: `Dandi doesn’t collect any personally identifiable information (PII).`,
    },
    {
      title: `Granular sharing controls`,
      body: `Manage sharing and communication as needed.`,
    },
  ];
  return (
    <InView
      variant="pages.product.security.workflows"
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
          <div className="section1">
            <div className="toptext">
              <Styled.h2>Keeping workflows secure</Styled.h2>
              <Styled.p>
                With Dandi, you can be sure that sensitive information never
                travels further than it should.
              </Styled.p>
            </div>
          </div>
          <div className="section2">
            <div className="categories">
              {categories.map((category, i) => (
                <div className="category" key={i}>
                  <Styled.p className="title">{category.title}</Styled.p>
                  <Styled.p className="body">{category.body}</Styled.p>
                </div>
              ))}
            </div>
          </div>
          <div className="graphic">
            <ReactSVG src="/assets/svgs/product/security/illustration_03.4.2.svg" />
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Workflows;
