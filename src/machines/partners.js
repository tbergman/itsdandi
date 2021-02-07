import { createMachine,assign } from "xstate";

export const Partners__machine = createMachine({
    id:"Partners",
    context:{
        elements:[],
        duration:45
    },
    initial:'idle',
    states:{
        idle:{
            on:{
                ADD_ELEMENT:{
                    actions:'addElement'
                },
                SET_POSITIONS:{
                    target:"positioning",
                
                }
            }
        },
        positioning:{
            entry:['setPositions','setDuration'],
            always:'animating'
        },
        animating:{
            entry:'animateCarousel'
        }
    }
},{
    actions:{
        addElement: assign((c,e)=>{
            const {width,idx}=e.payload;
            let elements_ = c.elements;
            const padding = 16 * 2
            elements_[idx] = width + padding;
            return {
                elements: elements_
            }


        }),
        setPositions:(c,e)=>{
            const {ref,gsap}=e.payload;
            const { elements} = c;

            const elementsReversed =  [...elements].reverse();
            const row = gsap.utils.toArray(ref.querySelectorAll(".Partners__logoCarousel-rowWrapper-container-row-imageWrapper"))
            let totalWidth=0;

            row.reverse().map((val,key,arr)=>{
            if (key===0){
            totalWidth = -(elementsReversed[key] + elements[0])
            } else {
            totalWidth = totalWidth - elementsReversed[key]
            }
            gsap.set(val,{
            x: totalWidth
            })
      })
        },
        setDuration:assign((_,e)=>{
            console.log(`setting duration to: ${e.payload.duration}`)
            return{
                duration:e.payload.duration
            }
        }),
        animateCarousel:(c,e)=>{
            const {ref,gsap}=e.payload;
            const { elements,duration}=c;
            const animateWidth =  -elements.reduce((acc,a)=>{
                return acc+a
            },0)
            
            const targetElements = ref.querySelectorAll(".Partners__logoCarousel-rowWrapper-container-row-imageWrapper")

         gsap.to(targetElements,{
          duration:duration,
          ease:'none',
          x:`+=${animateWidth}`,
          modifiers:{
            x:gsap.utils.unitize(x=>parseFloat(x) % animateWidth)
          },
          repeat:-1
        })

        }
    }
})