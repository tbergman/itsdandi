/** @jsx jsx */
import { jsx } from "theme-ui";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const InView = ({
  variant,
  rootMargin,
  setNavbarStyling,
  navBarStyling,
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
      }}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default InView;
