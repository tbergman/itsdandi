/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { ReactSVG } from "react-svg";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { useMachine } from "@xstate/react";
import { MobileMenu__machine } from "../machines/mobilemenu";
import { gsap } from "gsap";
import { navItems } from "../helpers/navigation";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

const MobileMenu = ({ menuOpen, navBarStyling, currentPage }) => {
  const [state, send] = useMachine(MobileMenu__machine);
  const navItemsRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (menuOpen) {
      disableBodyScroll(containerRef.current);
    } else {
      enableBodyScroll(containerRef.current);
    }
    return () => {
      //
    };
  }, [menuOpen]);

  useEffect(() => {
    navItems.map((item, i) => {
      if (item.sub) {
        //animate arrow
        gsap.to(navItemsRef.current.querySelector(`.arrow.${item.type}`), {
          rotate: state.context[item.type].open ? 180 : 0,
          ease: "power4.out",
          duration: 0.5,
        });
        const paddingTop = 16;
        const height = gsap.utils
          .toArray(
            navItemsRef.current.querySelectorAll(`.subitem.${item.type}`)
          )
          .reduce((prev, curr) => {
            return curr.clientHeight + prev;
          }, paddingTop);

        //animate height
        gsap.to(navItemsRef.current.querySelector(`.sub.${item.type}`), {
          height: state.context[item.type].open ? height : 0,
          paddingTop: state.context[item.type].open ? paddingTop : 0,
          duration: 0.5,
          ease: "power4.out",
        });

        // animate in subItems
        gsap.to(navItemsRef.current.querySelectorAll(`.subitem.${item.type}`), {
          opacity: state.context[item.type].open ? 1 : 0,
          x: state.context[item.type].open ? 0 : -100,
          duration: 0.2,
          delay: 0.2,
          ease: "power4.out",
        });
      }
    });
  }, [state]);

  return (
    <div
      ref={containerRef}
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
        <nav ref={navItemsRef} className="navitems">
          {navItems.map((item, i) => (
            <div className="item" key={i}>
              {item.sub ? (
                <div
                  onClick={() =>
                    send({
                      type: "TOGGLE",
                      payload: {
                        target: item.type,
                      },
                    })
                  }
                  className="wrapper"
                >
                  <div className="main">
                    <Styled.h2>{item.title}</Styled.h2>
                    <div className={`arrow ${item.type}`}>
                      <svg
                        width="20"
                        height="13"
                        viewBox="0 0 20 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.51472 1.51472L10 10L18.4853 1.51472"
                          stroke="#F2F2F2"
                          strokeOpacity="0.95"
                          strokeWidth="3"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className={`sub ${item.type}`}>
                    {item.sub.map((sub, i) => (
                      <Link href={sub.url} key={i}>
                        <a
                          className={
                            sub.type === currentPage
                              ? `subitem ${item.type} current`
                              : `subitem ${item.type}`
                          }
                        >
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
