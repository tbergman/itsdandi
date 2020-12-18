/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { ReactSVG } from "react-svg";
import Link from "next/link";
import { motion } from "framer-motion";
import { useReducer } from "react";

const MSGS = {
  TOGGLE: "TOGGLE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case MSGS.TOGGLE: {
      const { target } = action.payload;
      const current = state[target].open;

      return {
        ...state,
        [`${target}`]: {
          open: !current,
        },
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

const MobileMenu = ({ menuOpen, navBarStyling }) => {
  const [state, dispatch] = useReducer(reducer, {
    values: {
      open: false,
    },
    product: {
      open: false,
    },
    community: {
      open: false,
    },
  });

  const navItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Why Dandi?",
      type: "values",
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
      type: "product",
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
      type: "community",
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
            <div className="item" key={i}>
              {item.sub ? (
                <motion.div
                  onClick={() =>
                    dispatch({
                      type: MSGS.TOGGLE,
                      payload: {
                        target: item.type,
                      },
                    })
                  }
                  className="wrapper"
                >
                  <div className="main">
                    <Styled.h2>{item.title}</Styled.h2>
                    <ReactSVG src="/assets/svgs/arrow2.svg" />
                  </div>
                  <motion.div
                    layout
                    style={{
                      height: state[item.type].open ? "auto" : 0,
                    }}
                    className="sub"
                  >
                    {item.sub.map((sub, i) => (
                      <Link href={sub.url} key={i}>
                        <a className="subitem">
                          <Styled.p>{sub.title}</Styled.p>
                        </a>
                      </Link>
                    ))}
                  </motion.div>
                </motion.div>
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
