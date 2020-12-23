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
}) => {
  const modules = [
    {
      title: "Onboarding",
      description: `You’ll have hands-on support from our team throughout the entire onboarding process. Once you’re set up, you’ll continue to enjoy support from a real, knowledgeable person.`,
      listTitle: `What to expect during onboarding:`,
      listItems: [
        "Weekly calls to track progress on your data integration",
        "Help with data collection and cleanup",
        "Goal-setting and progress tracking",
      ],
    },
    {
      title: "Ongoing support",
      description: `Communication. It’s the secret to any good relationship. And with Dandi, it’s an integral part of our service to you.`,
      listTitle: "As a Dandi customer, you can expect: ",
      listItems: [
        "Monthly check-ins to review progress and product adoption",
        "Quarterly business reviews to cover high-level strategy and new product features",
        "Regularly-updated knowledge center",
      ],
    },
  ];

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
            {modules.map((module, i) => (
              <TextBlock
                key={i}
                title={module.title}
                description={module.description}
                listTitle={module.listTitle}
                listItems={module.listItems}
              />
            ))}
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Onboarding;
