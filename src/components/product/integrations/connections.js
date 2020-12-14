/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import InView from "../../inview";

const Connections = ({ setNavbarStyling, navBarStyling, windowHeight }) => {
  const logos = [
    "/assets/images/product/integrations/workday.png",
    "/assets/images/product/integrations/successfactor.png",
    "/assets/images/product/integrations/adp.png",
    "/assets/images/product/integrations/ultipro.png",
    "/assets/images/product/integrations/namely.png",
    "/assets/images/product/integrations/bamboohr.png",
    "/assets/images/product/integrations/oracle.png",
    "/assets/images/product/integrations/lever.png",
    "/assets/images/product/integrations/greenhouse.png",
    "/assets/images/product/integrations/cims.png",
  ];
  return (
    <InView
      variant="pages.product.integrations.connections"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={`0px 0px -${windowHeight - 94}px 0px`}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h2>All the right connections</Styled.h2>
          <Styled.p>
            Dandi integrates simply and securely through the API’s of most
            leading HR platforms. There’s no coding or data warehousing
            required, so setup is a snap.
          </Styled.p>
        </div>
        <div className="logos">
          {logos.map((url, i) => (
            <div className="logo" key={i}>
              <img src={url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </InView>
  );
};

export default Connections;
