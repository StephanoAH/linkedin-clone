import React from 'react';
import styles from './Register.module.css';

function Register() {
  const login = () => {
    return;
  };

  const register = () => {
    return;
  };
  return (
    <div className={styles.Container}>
      <img
        src="https://cdn.worldvectorlogo.com/logos/linkedin.svg"
        alt="linkedin logo"
      />
      <form className={styles.FormContainer} action="">
        <input type="text" required placeholder="Full name is required" />
        <input type="text" required placeholder="Profile pic URL (Optional)" />
        <input type="text" required placeholder="Email" />
        <input type="text" required placeholder="Password" />
        <button onClick={register}>Sign in</button>
      </form>
      <div className={styles.RegisterContainer}>
        <p>Already a member?</p>
        <span onClick={login}>Login now</span>
      </div>
    </div>
  );
}

export default Register;
