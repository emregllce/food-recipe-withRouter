import Meal from "../../assets/meal.svg"
import styles from "./Login.module.css"
import { Link } from 'react-router-dom'

import React from 'react'

const Login = () => {

const clrs = "<CLARUSWAY/> "

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form className={styles.login}>
          <img className = {styles.formIcon} src={Meal} alt="" />
          <h1 className={styles.title}>{clrs}RECIPE</h1>
          <input className={styles.inputItem}type="text" name="name" id="name" placeholder='USERNAME' />
          <input className={styles.inputItem} type="text" name="name" id="name" placeholder='PASSWORD' />
          <Link to={"main/"}><button className={styles.submit}type="submit">LOGIN</button></Link>
        </form>
      </div>
    </div>
  )
}

export default Login