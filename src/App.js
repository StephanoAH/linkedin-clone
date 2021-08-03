import React from 'react';
import styles from './App.module.css';
import TheHeader from './components/TheHeader/TheHeader';
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Feed from './pages/Feed/Feed';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className={styles.Container}>
      <Router>
        <TheHeader />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/feed">
            <Feed />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
