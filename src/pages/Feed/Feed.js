import React from 'react';
import styles from './Feed.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import PostCollection from '../../components/PostCollection/PostCollection';
import Widgets from '../../components/Widgets/Widgets';

function Feed() {
  return (
    <div className={styles.Container}>
      <Sidebar />
      <PostCollection />
      <Widgets />
    </div>
  );
}

export default Feed;
