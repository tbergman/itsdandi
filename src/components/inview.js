/** @jsx jsx */
import { jsx } from "theme-ui";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const InView = ({
  variant,
  rootMargin,
  setNavbarStyling,
  navBarStyling,
  bg,
  children,
}) => {
  const { inView, ref, entry } = useInView({ rootMargin });

  useEffect(() => {
    if (inView) {
      setNavbarStyling({
        ...navBarStyling,
      });
    }
    return () => {
      //
    };
  }, [inView]);
  // const ref = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const offsetEnd = ref.current.offsetHeight + 1304;

  //   gsap.to(ref.current, {
  //     scrollTrigger: {
  //       trigger: ref.current,
  //       // markers: true,
  //       start: "-=94",
  //       end: `+=${offsetEnd}`,
  //       onEnter: () => console.log("inView enter"),
  //       onLeaveBack: () => console.log("inView onleaveback"),
  //       onEnterBack: () => console.log("inView onenterback"),
  //     },
  //   });
  // if(inView) {
  //   setNavbarStyling({
  //     ...navBarStyling,
  //   });
  // },
  //   },
  //   []
  // );

  return (
    <div
      sx={{
        variant: variant,
        bg: bg,
      }}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default InView;
