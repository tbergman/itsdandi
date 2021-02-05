/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { ReactSVG } from "react-svg";
import Link from "next/link";
import {useRef,useEffect} from 'react';
import { useMachine } from "@xstate/react";
import {MobileMenu__machine} from '../machines/mobilemenu';
import {gsap}from'gsap'



const MobileMenu = ({ menuOpen, navBarStyling, currentPage }) => {
  const [state,send] = useMachine(MobileMenu__machine)
  const navItemsRef = useRef(null);

  useEffect(() => {
    navItems.map((item,i)=>{

      if (item.sub) {
         //animate arrow
        gsap.to(navItemsRef.current.querySelector(`.arrow.${item.type}`),{
          rotate: state.context[item.type].open ? 180 : 0,
          ease:"power4.out", 
          duration: .5
        })

        const paddingTop=16
        const height = gsap.utils.toArray(navItemsRef.current.querySelectorAll(`.subitem.${item.type}`)).reduce((prev,curr)=>{
          return curr.clientHeight+prev; 
        },paddingTop)

        //animate height
        gsap.to(navItemsRef.current.querySelector(`.sub.${item.type}`),{
   
          height:state.context[item.type].open ? height : 0,
          paddingTop:state.context[item.type].open ? paddingTop : 0,
          duration:.5,
          ease:"power4.out", 
        })

        // animate in subItems
        gsap.to(navItemsRef.current.querySelectorAll(`.subitem.${item.type}`),{
          opacity:state.context[item.type].open ? 1 : 0,
          x:state.context[item.type].open ? 0 : -100,
          duration:.2,
          delay:.2,
          ease:"power4.out", 
        })
      }

  


    }) 
  }, [state])


  const navItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Why Dandi?",
      type: "values",
      sub: [
        {
          title: "Pay Equity",
          url: "/values/equitypay",
          type: "equitypay",
        },
        {
          title: "The DEI Journey",
          url: "/values/deijourney",
          type: "deijourney",
        },
        {
          title: "For Your Role",
          url: "/values/leadership",
          type: "leadership",
        },
      ],
    },
    {
      title: "Product",
      type: "product",
      sub: [
        {
          title: "Measure",
          url: "/product/measure",
          type: "measure",
        },
        {
          title: "Analyze",
          url: "/product/analyze",
          type: "analyze",
        },
        {
          title: "Collaborate",
          url: "/product/collaborate",
          type: "collaborate",
        },
        {
          title: "Security",
          url: "/product/security",
          type: "security",
        },
        {
          title: "Integrations",
          url: "/product/integrations",
          type: "integrations",
        },
      ],
    },
    {
      title: "Pricing",
      url: "/pricing",
    },
    {
      title: "Community",
      type: "community",
      sub: [
        {
          title: "DEI Advisory Board",
          url: "/community/board",
          type: "board",
        },
        {
          title: "Marketplace Partners",
          url: "/community/partners",
          type: "partners",
        },
        {
          title: "Service & Support",
          url: "/community/support",
          type: "support",
        },
      ],
    },
  ];

  return (
    <div
      sx={{
        variant: "components.mobilemenu",
        visibility: menuOpen ? "visible" : "hidden",
        ...navBarStyling,
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <nav
          ref={navItemsRef}
        className="navitems">
          {navItems.map((item, i) => (
            <div 
            
            className="item" key={i}>
              {item.sub ? (
                <div
                  onClick={() =>
                    send({
                      type:"TOGGLE",
                      payload:{
                        target:item.type 
                      }
                    })
            
                  }
                  className="wrapper"
                >
                  <div className="main">
                    <Styled.h2>{item.title}</Styled.h2>
                    <div className={`arrow ${item.type}`}>
                      <svg
              
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
                  <div
                    className={`sub ${item.type}`}
                  >
                    {item.sub.map((sub, i) => (
                      <Link href={sub.url} key={i}>
                        <a
                          className={
                            sub.type === currentPage
                              ? `subitem ${item.type} current`
                              : `subitem ${item.type}`
                          }
                        >
                          <Styled.p>{sub.title}</Styled.p>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="wrapper">
                  <div className="main">
                    <Link href={item.url}>
                      <a>
                        <Styled.h2>{item.title}</Styled.h2>
                      </a>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
