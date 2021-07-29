import React from 'react';
import styles from './RecentItems.module.css';

function RecentItems({ topic }) {
  return (
    <div className={styles.Container}>
      <span className={styles.Hashtag}>#</span>
      <p className={styles.Theme}>{topic}</p>
    </div>
  );
}

export default RecentItems;
