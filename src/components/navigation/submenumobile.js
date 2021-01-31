/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import {Draggable} from 'gsap/dist/Draggable';
import {gsap} from 'gsap';


const SubMenuMobile = ({ subPages, subMenuStyling,slidesPerView }) => {
  const swiper = useRef(null)
  const swipeWrapper = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(Draggable);
    Draggable.create(swiper.current,{
      inertia:true,
      type:'x',
      bounds:swipeWrapper.current,
      


    });
   

  }, [])

  return (
    <div
    ref={swipeWrapper}
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
        {/* 

          <div
            sx={{
              bg: subMenuStyling.bg,
            }}
            className="SubMenu__mobileContainer-right"
          >
            <svg
              className="SubMenu__mobileContainer-arrow"
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
            className="SubMenu__mobileContainer-left"
          >
            <svg
              className="SubMenu__mobileContainer-arrow"
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
   */}

      </div>
    </div>
  );
};

export default SubMenuMobile;
