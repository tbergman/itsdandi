/** @jsx jsx */
import { jsx } from "theme-ui";
import Button from "../button";
import {gsap} from 'gsap';
import { useRef, useEffect} from 'react';

const TopContent = ({ isDesktop }) => {
  const chainGroup = useRef(null)
  const topChain = useRef(null)
  const topChainMobile = useRef(null)
  const chainGroupMobile = useRef(null)

  useEffect(() => {
    if(isDesktop) {
      gsap.fromTo([chainGroup.current],{
        rotate:-15,
      },{
        rotate:0,
        delay:.1,
        duration:.5,
        ease:"back.out(2)"
      })
  
      gsap.fromTo([topChain.current],{
        rotate:25
      },{
        rotate:0,
        delay:.1,
        duration:.5,ease:"back.out(2)"
      })
    } else {
      // fix mobile
      // gsap.fromTo([topChainMobile.current],{
      //   rotate:50
      // },{
      //   rotate:0,
      //   delay:.1,
      //   duration:.5,
      //   ease:"back.out(2)",
      //   transformOrigin:'10% 90%'
      // })
      // gsap.fromTo([chainGroupMobile.current],{
      //   rotate:-10,
      // },{
      //   rotate:0,
      //   delay:.1,
      //   duration:.5,
      //   ease:'back.out(2)',
      //   transformOrigin:'50% 50%'
      // })
    }
   
  }, [])
  return (
    <div
      className="TopContent"
      sx={{
        variant: "pages.product.security.topcontent",
      }}
    >
      <div className="TopContent__btnWrapper">
        <Button
          className="TopContent__btnWrapper-btn"
          url="/"
          text="Request a demo"
        />
      </div>
      <div className="TopContent__graphics">
        {isDesktop ? (
          <svg
            className="TopContent__graphics-chainsDesktop"
            width="427"
            height="610"
            viewBox="0 0 100 610"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="-0.110523"
              y="1.40768"
              width="113.81"
              height="247.54"
              rx="56.9049"
              transform="matrix(0.650773 0.759272 -0.761296 0.648405 1.647 360.45)"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <g
              ref={chainGroup}
              style={{
                transformOrigin:'0% 80%'
              }}
            >
            <rect
              x="-1.00785"
              y="-0.993877"
              width="113.704"
              height="246.375"
              rx="56.852"
              transform="matrix(-0.999981 0.00609227 -0.00786676 -0.999969 103.632 424.39)"
              stroke="#FFD93B"
              strokeWidth="2"
            />
            <g
              ref={topChain}
              style={{
                transformOrigin:'10% 30%'
              }}
            >
            <rect
              x="-0.0573572"
              y="1.41107"
              width="113.283"
              height="247.223"
              rx="56.6415"
              transform="matrix(0.678831 0.734294 -0.736189 0.676776 159.496 0.502115)"
              stroke="#F9D2FF"
              strokeWidth="2"
            />
            </g>
            
            </g>
        
          </svg>
        ) : (
          <svg
            className="TopContent__graphics-chainsMobile"
            width="148"
            height="175"
            viewBox="0 0 148 175"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
          
              x="-0.498146"
              y="1.32122"
              width="36.6589"
              height="81.2998"
              rx="18.3294"
              transform="matrix(0.413597 0.91046 -0.911744 0.41076 77.85 106.816)"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <g
              ref={chainGroupMobile}
            >
            <rect
              x="-1.19601"
              y="-0.757047"
              width="36.6235"
              height="80.911"
              rx="18.3118"
              transform="matrix(-0.975855 0.218419 -0.220151 -0.975466 107.772 125.094)"
              stroke="#FFD93B"
              strokeWidth="2"
            />
            <g
       
              ref={topChainMobile}
            >      
              <rect
              x="-0.570172"
              y="1.29202"
              width="36.483"
              height="81.194"
              rx="18.2415"
              transform="matrix(0.362731 0.931894 -0.932904 0.360125 134.883 1.36979)"
              stroke="#F9D2FF"
              strokeWidth="2"
            /></g>

            </g>
          
      
            <path
              d="M70.043 112.859L67.2272 112.86"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <path
              d="M92.1152 56.4688L92.95 57.5079"
              stroke="#FFD93B"
              strokeWidth="2"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default TopContent;
