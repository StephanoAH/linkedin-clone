import React from 'react';
import styles from './TheHeader.module.css';
import HeaderOptions from './HeaderOptions/HeaderOption';
// Icons
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

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
      <div className={styles.HeaderRight}>
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <HeaderOptions
          avatar="https://image.freepik.com/free-photo/confident-businessman-posing-outside_74855-1551.jpg"
          title="Me"
        />
      </div>
    </header>
  );
}

export default TheHeader;
