import { async } from "@firebase/util";
import React, { useContext } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { logOut } from "../../auth/firebase";
import { AuthContext } from "../../context/AuthContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const clrs = "<Clarusway>";
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut(navigate);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <div className={styles.clrs2} onClick={()=>
        currentUser
        ? navigate("/main")
        : alert("please log in to see your recipe")
        } >
          <span className={styles.clrs}>{clrs}</span> Recipe
        </div>
      </div>
      {currentUser ? (
        <div className={styles.navbarRight}>
          <NavLink to="/about" className={styles.about}>
            About <br /> {currentUser?.displayName}
          </NavLink>
          <NavLink to="/github">Github</NavLink>
          <div style={{ cursor: "pointer" }} onClick={handleLogOut}>
            Logout
          </div>
        </div>
      ) : (
        <div className={styles.navbarRight}>
          <div>Please Login to See Your Recipe</div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
