/** @jsx jsx */
import { jsx } from "theme-ui";
import TextBlock from "./textblock";
import InView from "../../inview";
import { rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";

const Onboarding = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  subMenuStyling,
  setSubMenuStyling,
  isDesktop,
  content,
}) => {
  return (
    <InView
      variant="pages.community.support.onboarding"
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
          <div className="textmodules">
            {content.map((module, i) => (
              <TextBlock
                key={i}
                title={module.fields.header}
                description={module.fields.body}
                listTitle={module.fields.list_title}
                listItems={module.fields.list_items}
              />
            ))}
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Onboarding;
