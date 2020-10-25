import React, {useCallback, useState} from 'react'
import ScrollTrigger from 'react-scroll-trigger';

import outside from "./phone-outside.jpg"

import inside from "./phone-inside.jpg"

import classes from "./opacity.module.scss"



export default () => {
    const [opacity, setOpacity] = useState(0)

    const scrollHandler = useCallback(
        (progress) => {
            if(progress < 0.27){
            setOpacity(0)
        }else if(progress > 0.75){
            setOpacity(1)
        }else{
            setOpacity(progress)
        }
            
        
       
        },
        [],
    )

  

   
    return (
        <ScrollTrigger  onProgress={({progress})=> scrollHandler(progress)}>
        <section style={{position: "relative", height: "100%"}} >

           <div className={classes.backgroundContainer}>
               <span><div className={classes.phoneContainer}>
                   <h1>OPACITY STICKY ANIMATION</h1>
        <div  >
            <img src={outside} alt="outside-phone"/>
        </div>
        <div style={{opacity: opacity}} >
        <img  src={inside} alt="inside-phone"/>
    </div> </div> </span>
               <span> </span>
               <span ></span>
               <span ></span>
          

          
    </div>
    </section>
    </ScrollTrigger>
    )
}
