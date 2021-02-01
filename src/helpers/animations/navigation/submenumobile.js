import {gsap} from 'gsap';

export const createSnapGrid = ({swiperWrapper,swiper,}) => {
    let snapGrid = [];
    let currentPos=0;
    const maxOffset = swiper.current.clientWidth - swiperWrapper.current.clientWidth
    const elements = gsap.utils.toArray(swiper.current.querySelectorAll(".SubMenu__mobileContainer-draggable-item"));
   
    elements.forEach((val,key,arr)=>{
      if (key===0) {
        snapGrid.push(0);
      }
      
      else { 
        if (currentPos < maxOffset) {
          snapGrid.push(( -(currentPos)));
        } 
      }
      currentPos += val.clientWidth; 
    })

    snapGrid.push(-maxOffset);

    return snapGrid;
}