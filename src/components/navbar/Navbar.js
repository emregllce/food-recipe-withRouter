import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from "./Navbar.module.css"

const Navbar = () => {
  const clrs = "<Clarusway>"
  return (
    <div className={styles.navbar}>
        <div className={styles.navbarLeft}>
            <NavLink to="/main" className={styles.clrs2}><span className={styles.clrs}>{clrs}</span> Recipe</NavLink></div>
        <div className={styles.navbarRight}>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/github">Github</NavLink>
            <NavLink to="/">Logout</NavLink>
        </div>

    </div>
  )
}

export default Navbar