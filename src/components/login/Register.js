import React, { useState } from "react";

import Meal from "../../assets/meal.svg";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { createUser, signUpProvider } from "../../auth/firebase";

const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const clrs = "<CLARUSWAY/> ";

  const handleSubmit = (e) => {
    const displayName = `${firstName} ${lastName}`;
    e.preventDefault();
    createUser(email, password, displayName, navigate);

    // console.log(firstName, lastName);
  };

  const handleGoogle = () => {
    signUpProvider(navigate)
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form className={styles.login} onSubmit={handleSubmit}>
          <img className={styles.formIcon} src={Meal} alt="" />
          <h1 className={styles.title}>{clrs}RECIPE</h1>
          <input
            className={styles.inputItem}
            type="text"
            name="name"
            id="name"
            placeholder="your name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className={styles.inputItem}
            type="text"
            name="lastname"
            id="lastname"
            placeholder="your lastname"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className={styles.inputItem}
            type="email"
            name="email"
            id="email"
            placeholder="your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.inputItem}
            type="password"
            name="password"
            id="password"
            placeholder="PASSWORD"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.submit} type="submit">
            REGISTER
          </button>
          
          <Link to={"/main"}>
            <button className={styles.submit} type="button" onClick={handleGoogle}>
              register with google
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
