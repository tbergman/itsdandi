/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Carousel from "../../carousel";
import InView from "../../inview";
import { useState, useEffect } from "react";

const DeiWork = ({ setNavbarStyling, navBarStyling, windowHeight }) => {
  const [current, setCurrent] = useState(0);
  const time = 5000;

  useEffect(() => {
    const next = (current + 1) % slides.length;
    const id = setTimeout(() => setCurrent(next), time);
    return () => clearTimeout(id);
  }, [current]);

  const slides = [
    {
      header: "Dashboard templates",
      body: `Inspired by the best dashboards we’ve seen on the platform, Dandi templates make it easy to start tracking the right things, right away.`,
      imageUrl: "/assets/images/03.3_dashboard_templats.png",
    },
    {
      header: "Visualizations",
      body: `Export beautifully designed charts and graphs for readouts and presentations.`,
      imageUrl: "/assets/images/03.2_visualisations.png",
    },
    {
      header: "Assignments",
      body: `Want to make sure someone follows up on a key piece of information? Assignments help keep everyone on track.`,
      imageUrl: "/assets/images/03.2_assignments.png",
    },
    {
      header: "Goals",
      body: `Make sure you’re hitting all the little milestones along the way to the big ones.`,
      imageUrl: "/assets/images/03.2_goals.png",
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
            <div className="carousel">
              <Carousel slides={slides} current={current} color="yellow" />
            </div>
          </div>
          <div className="section2">
            <img src={slides[current].imageUrl} alt="" />
          </div>
        </div>
      </div>
    </InView>
  );
};

export default DeiWork;
