import React from 'react'
import coding from "../../assets/coding.svg"
import styles from "./About.module.css"


const About = () => {
  return (
    <div className={styles.master}>
      
      <div className = {styles.imgContainer}>
        <img className={styles.coding}  src={coding} alt="" />
      </div>
      <div className={styles.container}>
        <h1>About Software Developer <span className="emre">EmreGllce</span></h1>
      </div>  
      <div className={styles.bottomContainer}>
          <h3 className={styles.descText}>
          Hi, I'am Emre <br/>
          I’m currently learning Full-Stack Development Languages<br/>
          I know JS, ReactJS, Django, NodeJS, MongoDB,SQL, Python, AWS Services<br/>
          <span>Send email</span> : emregllce@gmail.com
          </h3>
      </div>
        
       
       
    </div>
  )
}

export default About