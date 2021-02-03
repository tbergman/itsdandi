import { createMachine } from "xstate";

export const BigLogo__machine = createMachine({
    id:"BigLogo",
    initial:'large',
    context:{

    },
    states:{
        large:{
            on:{
                SCROLL_TRIGGERED:{
                    actions:'animateDown',
                    target:'small',
                },
                OPEN_MENU:{
                    actions:'switch',
                    target:'small'
                }
            }
        },
        small:{
       
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
                duration:.1
            })

            gsap.to(letters,{
                opacity:0,
                duration:.1
            })
        }
    }
})