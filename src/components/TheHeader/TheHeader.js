import React from 'react';
import styles from './TheHeader.module.css';
import SearchIcon from '@material-ui/icons/Search';
// import HeaderOptions from './HeaderOptions/HeaderOption';

function TheHeader() {
  return (
    <header className={styles.Header}>
      <div className={styles.HeaderLeft}>
        <img
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt="An i and a n on a blue background"
        />
        <div className={styles.HeaderSearch}>
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className={styles.HeaderRight}>{/*<HeaderOptions />*/}</div>
    </header>
  );
}

export default TheHeader;
