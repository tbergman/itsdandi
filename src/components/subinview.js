/** @jsx jsx */
import { jsx } from "theme-ui";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const SubInView = ({
  rootMargin,
  setSubMenuStyling,
  subMenuStyling,
  children,
}) => {
  const { inView, ref, entry } = useInView({
    rootMargin,
  });

  useEffect(() => {
    if (inView) {
      setSubMenuStyling({
        ...subMenuStyling,
      });
    }
  }, [inView]);

  return <div ref={ref}>{children}</div>;
};

export default SubInView;
