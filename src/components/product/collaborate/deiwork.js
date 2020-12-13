/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Carousel from "./carousel";
import InView from "../../inview";

const DeiWork = ({ setNavbarStyling, navBarStyling, windowHeight }) => {
  const items = [
    {
      title: "Dashboard templates",
      body: `Inspired by the best dashboards we’ve seen on the platform, Dandi templates make it easy to start tracking the right things, right away.`,
    },
    {
      title: "Visualizations",
      body: `Export beautifully designed charts and graphs for readouts and presentations.`,
    },
    {
      title: "Assignments",
      body: `Want to make sure someone follows up on a key piece of information? Assignments help keep everyone on track.`,
    },
    {
      title: "Goals",
      body: `Make sure you’re hitting all the little milestones along the way to the big ones. `,
    },
  ];

  return (
    <InView
      variant="pages.product.collaborate.deiwork"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={`0px 0px -${windowHeight - 94}px 0px`}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="title">
          <Styled.h2>Making DEI work</Styled.h2>
        </div>
        <div className="wrapper">
          <div className="section1">
            <div className="text">
              <Styled.p>
                Dandi’s workflow tools are designed to make the day-to-day work
                of advancing DEI easier and more impactful.
              </Styled.p>
            </div>
            <div className="carousel"></div>
          </div>
          <div className="section2">
            <img src="/assets/images/03.3_dashboard_templats.png" alt="" />
          </div>
        </div>
      </div>
    </InView>
  );
};

export default DeiWork;
