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
  isDesktop,
  content,
}) => {
  const { header, logosRow1, logosRow2 } = content;
  const rowWrapper1 = useRef(null)
  const cards = ["card 1","card 2","card 3","card 4","card 5","card 6","card 7","card 8","card 9", "card 10"]

  useEffect(() => {



    gsap.to('.Partners__logoCarousel-rowWrapper-container-row-imageWrapper',{
      duration:10,
      ease:'none',
      x:"+=3000",
      modifiers:{
        x: gsap.utils.unitize(x=>parseFloat(x) % 200)
      },
      // repeat:-1
    })
  }, [])

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
          
          ref={rowWrapper1}  >
            <div className="Partners__logoCarousel-rowWrapper-container">
              <div
     
                className="Partners__logoCarousel-rowWrapper-container-row"
              >
                {cards.map((card,i)=><div className="Partners__logoCarousel-rowWrapper-container-row-imageWrapper" style={{
                  width:'300px',
                  height:'100%',
                  backgroundColor:'salmon',
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center'
                }} key={i}>{card}</div>)}
                {/* {logosRow1.map((url, i) => (
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
                ))} */}
             
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
