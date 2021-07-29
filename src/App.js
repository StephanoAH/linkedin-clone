import React from 'react';
import styles from './App.module.css';
import TheHeader from './components/TheHeader/TheHeader';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';

function App() {
  return (
    <div className={styles.Container}>
      <TheHeader />
      <div className={styles.Body}>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
