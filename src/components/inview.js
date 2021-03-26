/** @jsx jsx */
import { jsx } from "theme-ui";
// import { useInView } from "react-intersection-observer";
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
  // const { inView, ref, entry } = useInView({
  //   rootMargin,
  // });
  const ref = useRef(null);
  console.log(rootMargin);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const offsetEnd = ref.current.offsetHeight + 1304;

    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        // markers: true,
        start: "-=94",
        end: `+=${offsetEnd}`,
        toggleClass: {
          targets: ".Navigation",
          className: "grey",
        },
      },
    });
    // if (inView) {
    //   setNavbarStyling({
    //     ...navBarStyling,
    //   });
    // }
  }, []);

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
