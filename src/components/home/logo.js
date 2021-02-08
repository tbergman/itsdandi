/** @jsx jsx */
import { jsx} from 'theme-ui';
import useResizeObserver from 'use-resize-observer';

const Logo = ({url,idx,state,send,additionalClass}) =>{
    const { elements } = state.context
    const  { ref } = useResizeObserver({onResize:({width})=>{
        if (width !== 0 && !elements[idx]) {
                send({
                    type:"ADD_ELEMENT",
                    payload:{
                        width,
                        idx
                    }
                })

   
        }
    } })

    return(
        <div
        ref={ref}
        className={`Partners__logoCarousel-rowWrapper-container-row-imageWrapper ${additionalClass}`}
   
      >
        <picture>
          <source
            media="(min-width: 800px)"
            srcSet={url.desktop_image}
          ></source>
          <source srcSet={url.mobile_image}></source>
          <img
            className="Partners__logoCarousel-rowWrapper-container-row-imageWrapper-image"
            src={url.desktop_image}
            alt=""
          />
        </picture>
      </div>
    )
}

export default Logo;
