import React from 'react';
import styles from './Sidebar.module.css';
import { Avatar } from '@material-ui/core';
import RecentItems from './RecentItems/RecentItems';

function Sidebar() {
  return (
    <div className={styles.Container}>
      <div className={styles.Top}>
        <img
          className={styles.BackgrounImg}
          src="https://image.freepik.com/free-photo/colorful-abstract-universe-textured-background_53876-108662.jpg"
          alt=""
        />
        <Avatar className={styles.Avatar} />
        <h3 className={styles.Name}>John Doe</h3>
        <h4 className={styles.Email}>jd@mail.com</h4>
      </div>
      <div className={styles.Stats}>
        {/*TODO: make this a componente*/}
        <div className={styles.Stat}>
          <p className={styles.Title}>Who viewed you</p>
          <p className={styles.Number}>2.745</p>
        </div>
        <div className={styles.Stat}>
          <p className={styles.Title}>Views on post</p>
          <p className={styles.Number}>2.486</p>
        </div>
      </div>
      <div className={styles.Bottom}>
        <p className={styles.Activity}>Recent</p>
        <RecentItems topic="ReactJs" />
        <RecentItems topic="Vue3" />
        <RecentItems topic="FastAPI" />
        <RecentItems topic="Python" />
        <RecentItems topic="Design" />
      </div>
    </div>
  );
}

export default Sidebar;
