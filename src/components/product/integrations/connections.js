/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { rootMargin } from "../../../helpers/utils";
import InView from "../../inview";

const Connections = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  isDesktop,
}) => {
  const logos = [
    {
      url: "/assets/images/product/integrations/workday.png",
      flex: ["0 30%", "0 15%"],
    },
    {
      url: "/assets/images/product/integrations/adp.png",
      flex: ["0 30%", "0 10%"],
    },
    {
      url: "/assets/images/product/integrations/oracle.png",
      flex: ["0 30%", "0 12%"],
    },
    {
      url: "/assets/images/product/integrations/successfactor.png",
      flex: ["0 70%", "0 30%"],
    },
    {
      url: "/assets/images/product/integrations/cims.png",
      flex: ["0 20%", "0 10%"],
    },
    {
      url: "/assets/images/product/integrations/lever.png",
      flex: ["0 40%", "0 20%"],
    },
    {
      url: "/assets/images/product/integrations/namely.png",
      flex: ["0 25%", "0 10%"],
    },
    {
      url: "/assets/images/product/integrations/ultipro.png",
      flex: ["0 20%", "0 10%"],
    },

    {
      url: "/assets/images/product/integrations/bamboohr.png",
      flex: ["0 45%", "0 20%"],
    },

    {
      url: "/assets/images/product/integrations/greenhouse.png",
      flex: ["0 45%", "0 20%"],
    },
  ];
  return (
    <InView
      variant="pages.product.integrations.connections"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
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
          {logos.map((logo, i) => (
            <div
              sx={{
                flex: logo.flex,
              }}
              className="logo"
              key={i}
            >
              <img src={logo.url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </InView>
  );
};

export default Connections;
