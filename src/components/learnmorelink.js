/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Link from "next/link";
// import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useRef } from "react";

const LearnMoreLink = ({ href, text, color, external }) => {
  // const arrowMotion = {
  //   hover: {
  //     x: 10,
  //     transition: {
  //       ease: "easeOut",
  //       duration: 0.175,
  //       type: "tween",
  //     },
  //   },
  // };

  const ref = useRef(null);

  return external ? (
    <a
      ref={ref}
      href={href}
      target="_blank"
      sx={{
        variant: "components.learnMoreLink",
      }}
      className="learnMoreLink"
    >
      <Styled.p
        sx={{
          color: color,
        }}
        className="learnMoreLink__text"
      >
        {text}
      </Styled.p>

      <svg
        className="learnMoreLink__arrow"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 3.00464L14 8.00464L9 13.0046"
          stroke={color}
          strokeWidth="1.6"
        />
        <line
          x1="14"
          y1="8.00425"
          x2="1"
          y2="8.00425"
          stroke={color}
          strokeWidth="1.8"
        />
      </svg>
    </a>
  ) : (
    <Link href={href}>
      <a
        ref={ref}
        onMouseOver={() => {
          gsap.to(ref.current.querySelector(".learnMoreLink__arrow"), {
            x: 10,
            duration: 0.175,
            ease: "power2.out",
          });
        }}
        onMouseOut={() => {
          gsap.to(ref.current.querySelector(".learnMoreLink__arrow"), {
            x: 0,
            duration: 0.175,
            ease: "power2.out",
          });
        }}
        sx={{
          variant: "components.learnMoreLink",
        }}
        className="learnMoreLink"
      >
        <Styled.p
          sx={{
            color: color,
          }}
          className="learnMoreLink__text"
        >
          {text}
        </Styled.p>

        <svg
          className="learnMoreLink__arrow"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 3.00464L14 8.00464L9 13.0046"
            stroke={color}
            strokeWidth="1.6"
          />
          <line
            x1="14"
            y1="8.00425"
            x2="1"
            y2="8.00425"
            stroke={color}
            strokeWidth="1.8"
          />
        </svg>
      </a>
    </Link>
  );
};

export default LearnMoreLink;
