/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx } from "theme-ui";
import Button from "../button";
import {gsap} from 'gsap';
import {useRef, useEffect} from 'react';

const TopContent = ({ isDesktop, content }) => {
  const { button_text, url } = content;
  const smallCircle = useRef(null);
  const bigCircle = useRef(null)

  useEffect(() => {
    gsap.fromTo([smallCircle.current],{
      x:10,
      y:-50,
      scale:.8
    },{
      y:0,
      x:0,
      scale:1,
      delay:.1,
      duration:.5,
      ease:"back.out(2)"

    })
    gsap.fromTo([bigCircle.current],{
      x:-5,
      scale:.9
    },{
      x:0,
      scale:1,
      delay:.1,
      duration:.5,
      ease:"back.out(2)"
    })
  }, [])
  
  return (
    <div
      sx={{
        variant: "pages.product.integrations.topcontent",
      }}
      className="TopContent"
    >
      <div className="TopContent__buttonWrapper">
        <Button url={url} text={button_text} isDesktop={isDesktop} />
      </div>
      <div className="TopContent__graphics">
        <div className="TopContent__graphicsWrapper">
          <div className="TopContent__graphics-svg">
            <svg
              width="465"
              height="395"
              viewBox="0 0 465 395"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="465"
                height="395"
              >
                <rect y="0.00390625" width="465" height="394" fill="#C4C4C4" />
              </mask> */}
              {/* <g mask="url(#mask0)"> */}
                <circle
                  ref={smallCircle}
              
               
                  cx="390.5"
                  cy="152.504"
                  r="65.5"
                  stroke="#00FCFF"
                  strokeWidth="2"
                />
                <circle
                  ref={bigCircle}
                  cx="233"
                  cy="315.004"
                  r="203"
                  stroke="#335AFF"
                  strokeWidth="2"
                />
              {/* </g> */}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContent;
