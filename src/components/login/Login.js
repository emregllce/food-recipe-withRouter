import Meal from "../../assets/meal.svg";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";

import React, { useState } from "react";
import { signIn } from "../../auth/firebase";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const clrs = "<CLARUSWAY/> ";

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);

    // console.log(firstName, lastName);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form className={styles.login} onSubmit={handleSubmit}>
          <img className={styles.formIcon} src={Meal} alt="" />
          <h1 className={styles.title}>{clrs}RECIPE</h1>
          <input
            className={styles.inputItem}
            type="email"
            name="email"
            id="email"
            placeholder="EMAIL"
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
            LOGIN
          </button>
          <h3 className="list-group-item">
            <Link to={"register/"} className="card-link">
              Or Register
            </Link>
          </h3>
        </form>
      </div>
    </div>
  );
};

export default Login;
