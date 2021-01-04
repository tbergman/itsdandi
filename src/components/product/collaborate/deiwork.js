/** @jsx jsx */
import { jsx, Slider, Styled } from "theme-ui";
import InView from "../../inview";
import { useState, useEffect } from "react";
import { rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";
import { motion, AnimatePresence } from "framer-motion";
import CarouselItem from "../../carouselitem";

const DeiWork = ({
  setNavbarStyling,
  navBarStyling,
  subMenuStyling,
  setSubMenuStyling,
  windowHeight,
  isDesktop,
  content,
}) => {
  const [current, setCurrent] = useState(0);
  const time = 7500;
  const { header, body, carousel_item } = content;

  useEffect(() => {
    const next = (current + 1) % slides.length;
    const id = setTimeout(() => setCurrent(next), time);
    return () => clearTimeout(id);
  }, [current]);

  const slides = [
    {
      header: "Dashboard templates",
      body: `Inspired by the best dashboards we’ve seen on the platform, Dandi templates make it easy to start tracking the right things, right away.`,
      imageUrl: ["/assets/images/03.3_dashboard_templats.png"],
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

  const variants = {
    enter: {
      opacity: 0,
      x: 1000,
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -1000,
      opacity: 0,
    },
  };

  return (
    <InView
      variant="pages.product.collaborate.deiwork"
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
          <div className="title">
            <Styled.h2>Making DEI work</Styled.h2>
            {!isDesktop && (
              <div className="text">
                <Styled.p>
                  Dandi’s workflow tools are designed to make the day-to-day
                  work of advancing DEI easier and more impactful.
                </Styled.p>
              </div>
            )}
          </div>
          <div className="wrapper">
            <div className="section1">
              {isDesktop && (
                <div className="text">
                  <Styled.p>
                    Dandi’s workflow tools are designed to make the day-to-day
                    work of advancing DEI easier and more impactful.
                  </Styled.p>
                </div>
              )}

              <div className="carousel">
                <div
                  sx={{
                    variant: "components.shared.carousel",
                  }}
                >
                  {carousel_item.map((slide, i) => (
                    <CarouselItem
                      key={i}
                      idx={i}
                      setCurrent={setCurrent}
                      header={slide.header}
                      progressBarBg="yellow"
                      current={current === i}
                    >
                      <Styled.p
                        sx={{
                          color: "rgba(242, 242, 242, 0.7)",
                        }}
                      >
                        {slide.body}
                      </Styled.p>
                    </CarouselItem>
                  ))}
                </div>
              </div>
            </div>
            <AnimatePresence initial={false}>
              <motion.div className="section2">
                <motion.picture>
                  <source
                    media="(min-width: 800px)"
                    srcSet={carousel_item[current].desktop_image}
                  ></source>
                  <source srcSet={carousel_item[current].mobile_image}></source>

                  <motion.img
                    key={current}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    src={carousel_item[current].desktop_image}
                    alt=""
                  />
                </motion.picture>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default DeiWork;
