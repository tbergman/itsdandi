import {gsap} from 'gsap';

export const createSnapGrid = ({swiperWrapper,swiper,}) => {
    let snapGrid = {
      startingOffset:0,
      grid:[]
    };
    let currentPos=0;
    const maxOffset = swiper.current.clientWidth - swiperWrapper.current.clientWidth
    const elements = gsap.utils.toArray(swiper.current.querySelectorAll(".SubMenu__mobileContainer-draggable-item"));
   
    elements.forEach((val,key,arr)=>{

      if (val.classList.contains("current")) {
        snapGrid.startingOffset = currentPos<maxOffset ? -currentPos : -maxOffset;
      }

      if (key===0) {
        snapGrid.grid.push(0);
      }
      
      else { 
        if (currentPos < maxOffset) {
          snapGrid.grid.push(( -(currentPos)));
        } 
      }
      currentPos += val.clientWidth; 
    })

    snapGrid.grid.push(-maxOffset);

    return snapGrid;
}