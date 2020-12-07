/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import { useMediaQuery } from "react-responsive";
import devices from "../../helpers/devices";

const Quotes = () => {
  const isDesktop = useMediaQuery({
    query: devices.desktop,
  });
  return (
    <div
      sx={{
        variant: "pages.home.quotes",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="imagewrapper">
          <img src="/assets/images/carol1_desktop.png" alt="" />
        </div>
        <div className="text">
          <ReactSVG
            className="quotationmark"
            src="/assets/svgs/quotation.svg"
          />
          <Styled.h3>
            The right metrics drive the focus and recources for real progress.
            Dandi delivers these metrics Quickly and easily
          </Styled.h3>
          <div className="source">
            <Styled.p className="name">Carol Watson</Styled.p>
            <Styled.p className="title">
              Senior Director, Diversity Best Practices
            </Styled.p>
          </div>
        </div>
        <div className="navigation">
          <div className="prev">
            <ReactSVG src="assets/svgs/prev.svg" />
          </div>
          <div className="next">
            <ReactSVG src="assets/svgs/prev.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
