/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import {
  motion,
  useViewportScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import InView from "../inview";
import theme from "../../../theme";
import { rootMargin } from "../../helpers/utils";
import { useState, useEffect,useRef } from "react";
import { useInView } from "react-intersection-observer";
import {gsap} from 'gsap';


const Partners = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  width,
  isDesktop,
  content,
  isServer
}) => {
  const { header, logosRow1, logosRow2 } = content;
  const rowWrapper1 = useRef(null)
  const containerRow1 = useRef(null)
 
  useEffect(() => {
    if (!isServer) {
      // offset row container
      const offsetAmount = `-${rowWrapper1.current.clientWidth * 2}px`
      // containerRow1.current.style.right =  offsetAmount

      let totalWidth = 0;
      const elements = Array.from(rowWrapper1.current.querySelectorAll('.Partners__logoCarousel-rowWrapper-container-row-imageWrapper'))

      elements.map((val,key,arr)=>{
        console.log(val.clientWidth);
      })

      // elements.reverse().map((val,key,arr)=>{
      //   if (key===0){
      //     totalWidth = -(val.clientWidth +elements[0].clientWidth)
      //   } else {
      //     totalWidth = totalWidth - val.clientWidths
      //   }
      //   gsap.set(val,{
      //     x: totalWidth
      //   })
      // })

      const animateWidth = totalWidth + elements[0].clientWidth;

      // gsap.to(elements,{
      //   duration:45,
      //   ease:'none',
      //   x:`+=${animateWidth}`,
      //   modifiers:{
      //     x:gsap.utils.unitize(x=>parseFloat(x) % animateWidth)
      //   },
      //   repeat:-1
      // })
    }
  }, [isServer])

  return (
    <InView
      variant="pages.home.partners"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <div
        sx={{
          variant: "grid",
        }}
        className="Partners"
      >
        <div className="Partners__text">
          <Styled.h2 className="Partners__text-header">{header}</Styled.h2>
        </div>
        <div className="Partners__logoCarousel">
          <div className="Partners__logoCarousel-rowWrapper"
          
          ref={rowWrapper1}>
            <div
            
            className="Partners__logoCarousel-rowWrapper-container">
              <div
                ref={containerRow1}
                className="Partners__logoCarousel-rowWrapper-container-row"
              >
           
                 {logosRow1.map((url, i) => (
                  <div
                    className="Partners__logoCarousel-rowWrapper-container-row-imageWrapper"
                    key={i}
                  >
                    <picture>
                      <source
                        media="(min-width: 800px)"
                        srcSet={url.desktop_image}
                      ></source>
                      <source srcSet={url.mobile_image}></source>
                      <img
                        className="Partners__logoCarousel-rowWrapper-container-row-imageWrapper-image"
                        src={url.desktop_image}
                        alt=""
                      />
                    </picture>
                  </div>
                ))} 
             
              </div>
            </div>
          </div>
          <div className="Partners__logoCarousel-rowWrapper">
            {/* <div className="Partners__logoCarousel-rowWrapper-container">
              <div
          
    
                className="Partners__logoCarousel-rowWrapper-container-row"
              >
                {logosRow2.map((url, i) => (
                  <div
                    className="Partners__logoCarousel-rowWrapper-container-row-imageWrapper"
                    key={i}
                  >
                    <picture>
                      <source
                        media="(min-width: 800px)"
                        srcSet={url.desktop_image}
                      ></source>
                      <source srcSet={url.mobile_image}></source>
                      <img
                        className="Partners__logoCarousel-rowWrapper-container-row-imageWrapper"
                        src={url.desktop_image}
                        alt=""
                      />
                    </picture>
                  </div>
                ))}
              
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </InView>
  );
};

export default Partners;
