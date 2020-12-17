/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { ReactSVG } from "react-svg";
import Link from "next/link";

const MobileMenu = ({ menuOpen, navBarStyling }) => {
  const navItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Why Dandi?",
      sub: [
        {
          title: "Pay Equity",
          url: "/values/equitypay",
        },
        {
          title: "The DEI Journey",
          url: "/values/deijourney",
        },
        {
          title: "For Your Role",
          url: "/values/leadership",
        },
      ],
    },
    {
      title: "Product",
      sub: [
        {
          title: "Measure",
          url: "/product/measure",
        },
        {
          title: "Analyze",
          url: "/product/analyze",
        },
        {
          title: "Collaborate",
          url: "/product/collaborate",
        },
        {
          title: "Security",
          url: "/product/security",
        },
        {
          title: "Integrations",
          url: "/product/integrations",
        },
      ],
    },
    {
      title: "Pricing",
      url: "/pricing",
    },
    {
      title: "Community",
      sub: [
        {
          title: "DEI Advisory Board",
          url: "/community/board",
        },
        {
          title: "Marketplace Partners",
          url: "/community/partners",
        },
        {
          title: "Service & Support",
          url: "/community/support",
        },
      ],
    },
  ];
  return (
    <div
      sx={{
        variant: "components.mobilemenu",
        visibility: menuOpen ? "visible" : "hidden",
        ...navBarStyling,
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <nav className="navitems">
          {navItems.map((item, i) => (
            <div className="item">
              {item.sub ? (
                <div className="wrapper">
                  <div className="main">
                    <Styled.h2>{item.title}</Styled.h2>
                    <ReactSVG src="/assets/svgs/arrow2.svg" />
                  </div>
                  <div
                    sx={{
                      height: 0,
                      overflow: "hidden",
                    }}
                    className="sub"
                  >
                    {item.sub.map((sub, i) => (
                      <Link href={sub.url}>
                        <a className="subitem">
                          <Styled.p>{sub.title}</Styled.p>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="wrapper">
                  <div className="main">
                    <Link href={item.url}>
                      <a>
                        <Styled.h2>{item.title}</Styled.h2>
                      </a>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
