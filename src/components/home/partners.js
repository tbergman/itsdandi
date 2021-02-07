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
import { useState, useEffect,useRef,useCallback } from "react";
import { useInView } from "react-intersection-observer";
import {gsap} from 'gsap';
import Logo from "./logo";
import { useMachine } from "@xstate/react";
import { Partners__machine } from "../../machines/partners";


const Partners = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
  content,
  isServer
}) => {
  const { header, logosRow1, logosRow2 } = content;
  const rowWrapper1 = useRef(null)
  const containerRow1 = useRef(null)

  const [ state,send ] = useMachine(Partners__machine)

  useEffect(() => {
    if (!isServer) {
      console.log("offset rowWrapper")
        // offset row container
        const offsetAmount = `-${rowWrapper1.current.clientWidth * 2}px`
        containerRow1.current.style.right = offsetAmount
    }

  }, [isServer])

  useEffect(() => {
    if (!isServer) {

      // ready to position & animate? 
      if (state.context.elements.length === logosRow1.length) {
        send({
          type:"SET_POSITIONS",
          payload:{
            ref: containerRow1.current,
            gsap,
          }
        })
      }

    }
 
  }, [isServer, state.context])

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
                   <Logo 
                    url={url} 
                    key={i} 
                    idx={i}
                    send={send}
                    state={state}
                   />
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
  }

export default Partners
