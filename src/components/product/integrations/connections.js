/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { lineBreaks, rootMargin, rootMarginSub } from "../../../helpers/utils";
import InView from "../../inview";
import SubInView from "../../subinview";

const Connections = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  subMenuStyling,
  setSubMenuStyling,
  isDesktop,
  content,
}) => {
  const { header, body, logos } = content;

  return (
    <InView
      variant="pages.product.integrations.connections"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <SubInView
        subMenuStyling={subMenuStyling}
        setSubMenuStyling={setSubMenuStyling}
        rootMargin={rootMarginSub(windowHeight)}
      >
        <div
          sx={{
            variant: "grid",
          }}
        >
          <div className="text">
            <Styled.h2>{header}</Styled.h2>
            <Styled.p>{lineBreaks(body)}</Styled.p>
          </div>
          <div className="logos">
            {logos.map((logo, i) => (
              <div
                // sx={{
                //   flex: [
                //     `0 1 ${logo.mobile_size}%`,
                //     `0 1 ${logo.desktop_size}%`,
                //   ],
                // }}
                className="logos__logo"
                key={i}
              >
                <picture>
                  <source
                    media="(min-width: 800px)"
                    srcSet={logo.desktop_image}
                  ></source>
                  <source srcSet={logo.mobile_image}></source>
                  <img
                    className="logos__image"
                    src={logo.desktop_image}
                    alt=""
                  />
                </picture>
              </div>
            ))}
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Connections;
