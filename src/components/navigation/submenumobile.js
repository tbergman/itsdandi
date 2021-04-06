/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Draggable } from "gsap/dist/Draggable";
import { InertiaPlugin } from "gsap/dist/InertiaPlugin";
import { gsap } from "gsap";
import { useMachine } from "@xstate/react";
import { SubMenuMobile__Machine } from "../../machines/submenu";
import { createSnapGrid } from "../../helpers/utils";

const SubMenuMobile = ({ subPages, subMenuStyling }) => {
  const [state, send] = useMachine(SubMenuMobile__Machine);
  const { showNext, showPrev, snapGrid, currentOffset } = state.context;
  const swiper = useRef(null);
  const swiperWrapper = useRef(null);
  const right = useRef(null);
  const left = useRef(null);

  const swipe = ({ swiper, snapGrid, currentOffset, direction }) => {
    const currentIdx = snapGrid.indexOf(currentOffset);

    const snapTo = ({ direction, currentIdx, snapGrid }) => {
      switch (direction) {
        case "next": {
          return currentIdx < snapGrid.length - 1
            ? snapGrid[currentIdx + 1]
            : snapGrid[currentIdx];
        }
        case "prev": {
          return currentIdx > 0
            ? snapGrid[currentIdx - 1]
            : snapGrid[currentIdx];
        }
      }
    };

    const snapTo_ = snapTo({ direction, currentIdx, snapGrid });

    gsap.to(swiper.current, {
      x: snapTo_,
      duration: 0.25,
      onComplete: () => {
        send({
          type: "UPDATENAV",
          payload: {
            snapTo: snapTo_,
            snapGrid,
          },
        });
      },
    });
  };

  // swipe enabled
  useEffect(() => {
    gsap.registerPlugin(Draggable);
    gsap.registerPlugin(InertiaPlugin);
    const snapGrid_ = createSnapGrid({ swiperWrapper, swiper });

    // has overflow?
    if (swiperWrapper.current.clientWidth < swiper.current.clientWidth) {
      send({
        type: "UPDATENAV",
        payload: {
          snapTo: snapGrid_.startingOffset,
          snapGrid: snapGrid_.grid,
        },
      });

      gsap.to(swiper.current, {
        x: snapGrid_.startingOffset,
        duration: 0.1,
      });

      Draggable.create(swiper.current, {
        inertia: true,
        type: "x",
        bounds: swiperWrapper.current,
        throwResistance: 0,
        edgeResistance: 0.7,
        snap: {
          x: (value) => {
            const snapTo = gsap.utils.snap(snapGrid_.grid, value);
            // update navigation state
            send({
              type: "UPDATENAV",
              payload: {
                snapTo,
                snapGrid: snapGrid_.grid,
              },
            });
            return snapTo;
          },
        },
      });
    } else {
      send({
        type: "DISABLE",
      });
    }
  }, []);

  // navigation animation toggle
  useEffect(() => {
    gsap.to(right.current, {
      opacity: showNext ? 1 : 0,
      visibility: showNext ? "visible" : "hidden",
      duration: 0.1,
    });

    gsap.to(left.current, {
      opacity: showPrev ? 1 : 0,
      visibility: showPrev ? "visible" : "hidden",
      duration: 0.1,
    });
  }, [showNext, showPrev]);

  return (
    <div
      ref={swiperWrapper}
      className="SubMenu"
      sx={{
        variant: "components.submenu.mobile",
      }}
    >
      <div
        ref={swiper}
        sx={{
          color: subMenuStyling.color,
        }}
        className="SubMenu__mobileContainer"
      >
        {subPages.map((page, i) => (
          <Link href={page.url} key={i}>
            <a
              className={
                page.current
                  ? "SubMenu__mobileContainer-draggable-item current"
                  : "SubMenu__mobileContainer-draggable-item"
              }
            >
              <Styled.p className="SubMenu__mobileContainer-draggable-text">
                {page.name}
              </Styled.p>
            </a>
          </Link>
        ))}
      </div>
      <div
        sx={{
          bg: subMenuStyling.bg,
        }}
        ref={right}
        onClick={() =>
          swipe({ swiper, snapGrid, currentOffset, direction: "next" })
        }
        className={"SubMenu__right"}
      >
        <svg
          className="SubMenu__arrow"
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
      <div
        sx={{
          bg: subMenuStyling.bg,
        }}
        onClick={() =>
          swipe({ swiper, snapGrid, currentOffset, direction: "prev" })
        }
        ref={left}
        className={"SubMenu__left"}
      >
        <svg
          className="SubMenu__arrow"
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
  );
};

export default SubMenuMobile;
