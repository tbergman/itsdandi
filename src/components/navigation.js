/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav
      sx={{
        variant: "components.navigation",
      }}
    >
      <Link href="/">
        <a className="item">
          <div
            sx={{
              opacity: 1,
            }}
          >
            Home
          </div>
        </a>
      </Link>
      <Link href="/values">
        <a className="item">
          <div
            sx={{
              opacity: 0.5,
            }}
          >
            Values
          </div>
        </a>
      </Link>
      <Link href="/product">
        <a className="item">
          <div
            sx={{
              opacity: 0.5,
            }}
          >
            Product
          </div>
        </a>
      </Link>
      <Link href="/pricing">
        <a className="item">
          <div
            sx={{
              opacity: 0.5,
            }}
          >
            Pricing
          </div>
        </a>
      </Link>
      <Link href="/community">
        <a className="item">
          <div
            sx={{
              opacity: 0.5,
            }}
          >
            Community
          </div>
        </a>
      </Link>
      <Link href="/team">
        <a className="item">
          <div
            sx={{
              opacity: 0.5,
            }}
          >
            The team
          </div>
        </a>
      </Link>
      <a href="www.google.com" target="_blank" className="item">
        <div className="login">
          <div>Log in</div>
        </div>
      </a>
    </nav>
  );
};

export default Navigation;
