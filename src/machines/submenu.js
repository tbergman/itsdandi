import { createMachine,assign } from "xstate";

export const SubMenuDesktopMachine = createMachine({
  id: "SubMenuDesktopMachine",
  initial: "opened",
  states: {
    opened: {
      on: {
        CLOSE: "closed",
        MOUSE_LEAVE: "closed",
      },
    },
    closed: {
      on: {
        OPEN: "opened",
        MOUSE_ENTER: "opened",
      },
    },
  },
});

export const SubMenuMobile__Machine = createMachine({
  id:'SubMenuMobile',
  initial:'idle',
  context:{
    showNext:true,
    showPrev:false,
    currentOffset:0,
    snapGrid:null
  },
  states:{
    idle:{
      on:{
        UPDATENAV:{
          actions:'updateNav'
        },

      }
    }
  }
},{


  actions:{
    updateNav: assign({
      showNext:(_,e)=>{
        const {snapTo,snapGrid}=e.payload;
        return snapTo>snapGrid[snapGrid.length-1];
      },
      showPrev:(_,e)=>{
        const {snapTo,snapGrid}=e.payload;
        return snapTo<0;
      },
      currentOffset:(_,e)=>e.payload.snapTo,
      snapGrid:(_,e)=>e.payload.snapGrid
    }),


  }

})


  
