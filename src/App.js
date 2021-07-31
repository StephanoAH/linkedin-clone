import React from 'react';
import styles from './App.module.css';
import TheHeader from './components/TheHeader/TheHeader';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './pages/Feed/Feed';
import Widgets from './components/Widgets/Widgets';
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';
import Login from './pages/Login/Login';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className={styles.Container}>
      <TheHeader />
      {!user ? (
        <Login />
      ) : (
        //TODO: Rearrange this inside of a page
        <div className={styles.Body}>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
