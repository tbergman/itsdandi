/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useMachine } from "@xstate/react";
import { NavItem__machine } from "../../machines/navigation";

const NavItem = ({ url, active, body, sub }) => {
  const ref = useRef(null);
  const [state, send] = useMachine(NavItem__machine);

  return (
    <div
      onMouseEnter={() =>
        sub
          ? send({
              type: "SHOW",
              payload: {
                gsap,
                ref,
              },
            })
          : null
      }
      onMouseLeave={() =>
        sub
          ? send({
              type: "HIDE",
              payload: {
                gsap,
                ref,
              },
            })
          : null
      }
      className="item"
    >
      <Link href={url}>
        <a className="item-link">
          <div
            body={body}
            sx={{
              opacity: active ? 0.95 : 0.5,
              fontFamily: active ? "medium" : null,
            }}
          >
            {body}
          </div>
        </a>
      </Link>
      {sub && (
        <div ref={ref} className="item-dropdown">
          {sub.map((link, i) => (
            <Link href={link.url} key={i}>
              <a className="item-dropdown-item">
                <Styled.p
                  className="item-dropdown-item-text"
                  title={link.title}
                >
                  {link.title}
                </Styled.p>
              </a>
            </Link>
          ))}
          <span className="item-dropdown-filler"></span>
        </div>
      )}
    </div>
  );
};

export default NavItem;
