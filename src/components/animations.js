
import React from 'react'

// eslint-disable-next-line
import blackPhone from "./black-phone.png"
import bluePhone from "./blue-phone.png"

import classes from './animations.module.scss'

// eslint-disable-next-line
export default () => {
    return (
        <section className={classes.container}>
        <div className={classes.section}>
            <div  className={classes.fixed}>
            <h1>THIS IS THE BLUE PHONE</h1>
            <img src={bluePhone} alt="blue phone"/>
            </div>
           
            </div>
    
            <div className={classes.section}>
            <div  className={classes.fixed}>
            <h1>THIS IS THE BLACK PHONE</h1>
            <img src={blackPhone} alt="black phone"/>
            </div>
            </div>


        </section>
    
    )
}
