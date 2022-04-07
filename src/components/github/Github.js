import React from 'react'
import GithubImg from "../../assets/Octocat.jpg"
import styles from "./Github.module.css"

const Github = () => {
  return (
    <div className={styles.master}>
      
      
      <div className={styles.container}>
        <h1 className={styles.title}>More About Software Developer <span className={styles.emre}>EmreGllce</span></h1>
      </div>  
      <div className={styles.bottomContainer}>
          <h3 className={styles.descText}>
         
          if you want to learn more about me please visit my Github page<br/>
          https://github.com/emregllce
          </h3>
          <a href='https://github.com/emregllce' target="_blank"> 
          <img className={styles.gitImg} src={GithubImg} alt="" />
          </a>          
           </div>
        
       
       
    </div>
  )
}

export default Github