/** @jsx jsx */
import { useMachine } from '@xstate/react'
import {jsx} from 'theme-ui'
import {useRef,useEffect}from'react'
import Logo from './logo';
import { Partners__machine , Partners__machine2} from '../../machines/partners'
import {gsap } from 'gsap';


const CarouselRow = ({logosRow,isServer,duration, additionalClass}) => {
    const  [state,send] = useMachine(additionalClass==="row1" ? Partners__machine : Partners__machine2); 
    const containerRow = useRef(null)
    const rowWrapper = useRef(null)

  useEffect(() => {
    if (!isServer) {
        // offset containers
        const offsetAmount = `-${rowWrapper.current.clientWidth * 2}px`
        containerRow.current.style.right = offsetAmount
    }

  }, [isServer])

  useEffect(() => {
    if (!isServer) {

      // ready to position & animate row? 
      if (state.context.elements.length === logosRow.length) {
        send({
          type:"SET_POSITIONS",
          payload:{
            ref: containerRow.current,
            gsap,
            duration,
            targetClass: `.Partners__logoCarousel-rowWrapper-container-row-imageWrapper.${additionalClass}`
          }
        })
      }

    }
 
  }, [isServer, state.context])

    return <div className="Partners__logoCarousel-rowWrapper" ref={rowWrapper}>          
          <div className="Partners__logoCarousel-rowWrapper-container">

          <div
        ref={containerRow}
        className="Partners__logoCarousel-rowWrapper-container-row"
      > 
           {logosRow.map((url, i) => (
           <Logo 
            url={url} 
            key={i} 
            idx={i}
            send={send}
            state={state}
            additionalClass={additionalClass}
           />
        ))} </div>
        </div>
    </div> 
   
    
     

   


    
}

export default CarouselRow;