/** @jsx jsx */
import { jsx } from "theme-ui";
import TextBlock from "./textblock";
import InView from "../../inview";
import { rootMargin } from "../../../helpers/utils";

const GetCreative = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  isDesktop,
}) => {
  return (
    <InView
      variant="pages.community.support.getcreative"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <TextBlock
          title={`Let’s get creative`}
          description={`Have a question about DEI? Our team is happy to help. Here are some of the areas in which we’ve recently helped clients:`}
          listTitle={``}
          listItems={[
            "How to message Dandi to your people",
            "DEI reporting best practices",
            "Lawful data collection and remediation",
            "Establishing a philosophy around pay equity",
          ]}
        />
      </div>
    </InView>
  );
};

export default GetCreative;
