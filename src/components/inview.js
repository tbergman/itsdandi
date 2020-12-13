/** @jsx jsx */
import { jsx } from "theme-ui";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const InView = ({
  variant,
  rootMargin,
  setNavbarStyling,
  navBarStyling,
  bg,
  children,
}) => {
  const { inView, ref, entry } = useInView({
    rootMargin,
  });

  useEffect(() => {
    if (inView) {
      setNavbarStyling({
        ...navBarStyling,
      });
    }
  }, [inView]);

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
