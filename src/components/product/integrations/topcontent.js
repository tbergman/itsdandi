/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx } from "theme-ui";
import Button from "../button";
import {motion } from 'framer-motion';

const TopContent = ({ isDesktop, content }) => {
  const { button_text, url } = content;
  return (
    <div
      sx={{
        variant: "pages.product.integrations.topcontent",
      }}
      className="TopContent"
    >
      <div className="TopContent__buttonWrapper">
        <Button url={url} text={button_text} />
      </div>
      <div className="TopContent__graphics">
        <div className="TopContent__graphicsWrapper">
          <div className="TopContent__graphics-svg">
            <motion.svg
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
                <motion.circle
                style={{
                  x:10,y:-10
                }}
                initial={{
                  scale:.8,
                  x:10,
                  y:-10
                }}
                animate={{
                  scale:1,
                  x:0,
                  y:0
            
                }}
                transition={{
            
                  scale:{ duration:.2,},
                 
                  

                }}
                  cx="390.5"
                  cy="152.504"
                  r="65.5"
                  stroke="#00FCFF"
                  strokeWidth="2"
                />
                <motion.circle
                style={{
                  x:-20,
                  y:10
                }}
                initial={{
                  scale:.8,
                  x:-20,
                  y:10
                }}
                animate={{
                  scale:1,
                  x:0,y:0
                }}
                transition={{
         
                  scale:{duration:.2,},

                }}
                  cx="233"
                  cy="315.004"
                  r="203"
                  stroke="#335AFF"
                  strokeWidth="2"
                />
              {/* </g> */}
            </motion.svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContent;
