/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { rootMargin, rootMarginSub } from "../../../helpers/utils";
import InView from "../../inview";
import SubInView from "../../subinview";
import { useInView } from "react-intersection-observer";
import { globalSlideUp } from "../../../helpers/animations";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const CompensationGraph = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  setSubMenuStyling,
  subMenuStyling,
  isDesktop,
  content,
}) => {
  const { cities, body } = content;
  const animationControls = useAnimation();

  const { inView, ref, entry } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      animationControls.start((i) => {
        return globalSlideUp.visible(i);
      });
    }
  }, [inView]);

  return (
    <InView
      variant="pages.values.payequity.compensationgraph"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <SubInView
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={subMenuStyling}
        rootMargin={rootMarginSub(windowHeight)}
      >
        <div
          sx={{
            variant: "grid",
          }}
        >
          <div className="wrapper">
            <div className="graph">
              <div className="maingraph">
                {cities.map((dataPoint, i) => (
                  <div className="yAxis" key={i}>
                    <div
                      sx={{
                        height: `${dataPoint.height}%`,
                      }}
                      className="bar"
                    >
                      <Styled.h3>{`${dataPoint.maxnumber}x`}</Styled.h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="divider"></div>
              <div className="labels">
                {cities.map((dataPoint, i) => (
                  <div className="label" key={i}>
                    <Styled.p>{dataPoint.city}</Styled.p>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={animationControls}
              custom={1}
              variants={globalSlideUp}
            >
              <Styled.p className="text">{body}</Styled.p>
            </motion.div>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default CompensationGraph;
