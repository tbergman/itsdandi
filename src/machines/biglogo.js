import { createMachine } from "xstate";

export const BigLogo__machine = createMachine({
    id:"BigLogo",
    initial:'hidden',
    context:{},
    states:{
        hidden:{
            on:{
                SET_LARGE:{
                    actions:'switchLarge',
                    target:'large'
                },
                SET_SMALL:{
                    actions:'switch',
                    target:'small'
                }
            }
        },
        large:{
            on:{
                SCROLL_TRIGGERED:{
                    actions:'animateDown',
                    target:'small',
                },
     
                MAKE_STATIC:{
                    actions:'switch',
                    target:'small'
                }
            }
        },
        small:{
            type:'final',
        }
    }
},{
    actions:{
        animateDown:(_,e)=>{
            const { gsap, ref,scaleTo} = e.payload;
            const letters = ref.current.querySelectorAll(".BigLogo__logoSvg-letter");
    
            // scale down logo
            gsap.to(ref.current,{
            scale: scaleTo,
            ease:"power2.out",
            duration:.5      
            })

            // fade out letters
            gsap.to(letters,{
                opacity:0,
                duration:.2
            })
    
        },
        switch:(_,e)=>{
            const {gsap,ref,scaleTo}=e.payload;
            const letters=ref.current.querySelectorAll(".BigLogo__logoSvg-letter");

            gsap.to(ref.current,{
                scale:scaleTo,
                opacity:1,
                duration:.1,
            })

            gsap.to(letters,{
                opacity:0,
                duration:0
            })
        },
        switchLarge:(_,e)=>{
            const {gsap,ref}=e.payload;

            gsap.to(ref.current,{
                scale:1,
                opacity:1,
                duration:.1
            })
        }
    }
})