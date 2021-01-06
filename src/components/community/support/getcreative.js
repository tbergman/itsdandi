/** @jsx jsx */
import { jsx } from "theme-ui";
import TextBlock from "./textblock";
import InView from "../../inview";
import { rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";

const GetCreative = ({
  setNavbarStyling,
  subMenuStyling,
  setSubMenuStyling,
  navBarStyling,
  windowHeight,
  isDesktop,
  content,
}) => {
  return (
    <InView
      variant="pages.community.support.getcreative"
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
          {content.map((module, i) => (
            <TextBlock
              key={i}
              title={module.fields.header}
              description={module.fields.body}
              listTitle={""}
              listItems={module.fields.list_items}
            />
          ))}
        </div>
      </SubInView>
    </InView>
  );
};

export default GetCreative;
