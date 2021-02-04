import {createMachine,assign} from 'xstate';

export const MobileMenu__machine=createMachine({
    id:"MobileMenu",
    initial:'idle',
    context:{
        values: {
            open: false,
          },
          product: {
            open: false,
          },
          community: {
            open: false,
          },
    },
    states:{
        idle:{
            on:{
                TOGGLE:{
                    actions:'toggle',
                }
            }
        },

    }
},{
    actions:{
        toggle:assign((c,e)=>{
            return {
                [`${e.payload.target}`]: {
                    open: !c[e.payload.target].open
                }
            }
        })
        
    }
})

