import React, {useEffect, useState} from 'react'

import outside from "./phone-outside.jpg"

import inside from "./phone-inside.jpg"

import classes from "./opacity.module.scss"



export default () => {
    const [opacity, setOpacity] = useState(false)

   
    return (
        <section >
           
            <div className={classes.container}>
            <h1>CHANGE OPACITY ONSCROLL</h1>
        <div >
            <img src={outside} alt="outside-phone"/>
        </div>
        <div style={{opacity: opacity? "1" : "0"}} >
        <img src={inside} alt="inside-phone"/>
    </div>
    </div>
    </section>
    )
}
