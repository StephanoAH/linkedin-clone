import React from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

function Login() {
  const login = () => {
    return;
  };

  return (
    <div className={styles.Container}>
      <img
        src="https://cdn.worldvectorlogo.com/logos/linkedin.svg"
        alt="linkedin logo"
      />
      <form className={styles.FormContainer} action="">
        <input type="text" required placeholder="Email" />
        <input type="text" required placeholder="Password" />
        <button onClick={login}>Sign in</button>
      </form>
      <div className={styles.RegisterContainer}>
        <p>Not a member?</p>
        <Link to="/register">Register now</Link>
      </div>
    </div>
  );
}

export default Login;
