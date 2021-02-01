/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import {Draggable} from 'gsap/dist/Draggable';
import {InertiaPlugin} from 'gsap/dist/InertiaPlugin';
import {gsap} from 'gsap';
import {createSnapGrid} from '../../helpers/animations/navigation/submenumobile';


const SubMenuMobile = ({ subPages, subMenuStyling,slidesPerView }) => {
  const [showNext, setShowNext] = useState(true);
  const [showPrev, setShowPrev] = useState(false)
  const swiper = useRef(null)
  const swiperWrapper = useRef(null)
  const right = useRef(null)
  const left = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(Draggable);
    gsap.registerPlugin(InertiaPlugin);

    const snapGrid = createSnapGrid({swiperWrapper,swiper})



    Draggable.create(swiper.current,{
      inertia:true,
      type:'x',
      bounds:swiperWrapper.current,
      throwResistance:0.5,
      edgeResistance:.7,
      snap:{
        x: (value) => {
          const snapTo = gsap.utils.snap(snapGrid,value);
          if (snapTo===0) {
            setShowNext(true);
            setShowPrev(false);
          } else if (snapTo === snapGrid[snapGrid.length-1]) {
            setShowNext(false)
            setShowPrev(true);
          } else {
            setShowNext(true)
            setShowPrev(true)
          }
          
          return snapTo;
        }
      }
    });


  }, [])

  useEffect(() => {
    gsap.to(right.current,{
      opacity: showNext ? 1 : 0,
      visibility:showNext ?  'visible' : 'hidden',
      duration:.1
    })

    gsap.to(left.current,{
      opacity: showPrev ? 1 : 0,
      visibility:showPrev ?  'visible' : 'hidden',
      duration:.1
    })


  }, [
    showNext,
    showPrev
  ])



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
