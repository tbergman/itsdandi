/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const Intersectional = () => {
  return (
    <div
      sx={{
        variant: "pages.product.measure.intersectional",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="graphic">
          <img src="/assets/images/intersectional.png" alt="" />
        </div>
        <div className="text">
          <Styled.p>
            Dandi metrics not only provide greater clarity—they also enable
            intersectional measurement on the platform.
            <br />
            <br /> Now you can see how Black women in sales are compensated
            relative to their White male peers. Or how the recruiting process
            differs for veterans and non-veterans. Or how promotions impact
            overall sentiment at the company. Or…pretty much anything else you
            can imagine.
            <br />
            <br /> Because the only limit to what you can measure with Dandi is
            your curiosity.
          </Styled.p>
        </div>
      </div>
    </div>
  );
};

export default Intersectional;
