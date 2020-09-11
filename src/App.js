import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Returns from './Returns';
import Prime from './Prime';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import HeaderTwo from './HeaderTwo';
import Footer from './Footer';



function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <HeaderTwo />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/returns">
            <Header />
            <HeaderTwo />
            <Returns />
            <Footer />
          </Route>
          <Route path="/prime">
            <Header />
            <HeaderTwo />
            <Prime />
            <Footer />
          </Route>
          {/* This is the default route */}
          <Route path="/">
            <Header />
            <HeaderTwo />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
