/** @jsx jsx */
import { jsx } from "theme-ui";

const TopContent = ({isDesktop}) => {
  return (
    <div
      sx={{
        variant: "pages.community.partners.topcontent",
      }}
    >
      <div className="graphics">

        {isDesktop ? (
          <svg width="380" height="330" viewBox="0 0 380 330" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="380" height="330">
          <rect width="380" height="330" fill="#C4C4C4"/>
          </mask>
          <g mask="url(#mask0)">
          <path d="M241.885 253.752C311.537 253.752 368 197.396 368 127.878C368 58.3597 311.537 2.00391 241.885 2.00391C172.234 2.00391 115.771 58.3597 115.771 127.878C115.771 197.396 172.234 253.752 241.885 253.752Z" stroke="#335AFF" stroke-width="2" stroke-miterlimit="10"/>
          <path d="M218.121 381.534C267.371 332.283 267.448 252.508 218.291 203.351C169.134 154.194 89.3585 154.27 40.1078 203.521C-9.14298 252.772 -9.21905 332.547 39.9379 381.704C89.0948 430.861 168.87 430.785 218.121 381.534Z" stroke="#FFD93B" stroke-width="2" stroke-miterlimit="10"/>
          <path d="M5.09106 270.373L107.711 167.753" stroke="#FFD93B" stroke-width="2" stroke-miterlimit="10"/>
          <path d="M5.96973 311.164L148.585 168.549" stroke="#FFD93B" stroke-width="2" stroke-miterlimit="10"/>
          <path d="M15.1155 343.688L181.11 177.693" stroke="#FFD93B" stroke-width="2" stroke-miterlimit="10"/>
          <path d="M30.8567 369.615L207.038 193.433" stroke="#FFD93B" stroke-width="2" stroke-miterlimit="10"/>
          <path d="M51.1074 391.035L228.458 213.684" stroke="#FFD93B" stroke-width="2" stroke-miterlimit="10"/>
          <path d="M77.5364 406.275L243.698 240.113" stroke="#FFD93B" stroke-width="2" stroke-miterlimit="10"/>
          <path d="M109.477 416.006L253.344 272.138" stroke="#FFD93B" stroke-width="2" stroke-miterlimit="10"/>
          <path d="M151.018 416.301L253.638 313.681" stroke="#FFD93B" stroke-width="2" stroke-miterlimit="10"/>
          </g>
          </svg>
          
        ) : (
          <svg
          width="188"
          height="148"
          viewBox="0 0 188 148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="248"
            height="148"
          >
            <rect width="248" height="148" fill="#C4C4C4" />
          </mask>
          <g mask="url(#mask0)">
            <path
              d="M148.373 154.437C189.217 165.381 231.183 141.206 242.106 100.44C253.029 59.6735 228.774 17.7542 187.93 6.81014C147.086 -4.13394 105.121 20.0415 94.1973 60.8076C83.2741 101.574 107.53 143.493 148.373 154.437Z"
              stroke="#335AFF"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M117.36 228.354C152.322 208.715 162.215 161.946 139.456 123.893C116.697 85.8399 69.9047 70.9125 34.9421 90.5516C-0.0204865 110.191 -9.91346 156.959 12.8455 195.012C35.6046 233.065 82.3972 247.993 117.36 228.354Z"
              stroke="#FFD93B"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M3.90442 129.972L83.4999 83.5043"
              stroke="#FFD93B"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M-1.99023 154.031L105.5 92.0078"
              stroke="#FFD93B"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M-1.73682 174.543L121.686 103.285"
              stroke="#FFD93B"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M3.41943 192.223L134.416 116.591"
              stroke="#FFD93B"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M11.9297 207.961L143.796 131.828"
              stroke="#FFD93B"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M28.0327 218.053L151.58 146.723"
              stroke="#FFD93B"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
          </g>
        </svg>
        )}

    
      </div>
    </div>
  );
};

export default TopContent;
