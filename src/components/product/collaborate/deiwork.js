/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Carousel from "./carousel";

const DeiWork = () => {
  return (
    <div
      sx={{
        variant: "pages.product.collaborate.deiwork",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h2>Making DEI work</Styled.h2>
          <Styled.p>
            Dandi’s workflow tools are designed to make the day-to-day work of
            advancing DEI easier and more impactful.
          </Styled.p>
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default DeiWork;
