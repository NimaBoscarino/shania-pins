import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import HomePage from './screens/HomePage'

// Nima didn't make this, look at the link: https://usehooks.com/useLocalStorage/

// Hook
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}



// local storage using hooks - keeping people logged in after a refresh
// reducers


// conditional rendering

const Login = ({ logTheUserIn }) => {

  return (
    <button onClick={logTheUserIn}><h1>Login!</h1></button>
  )
}

const App = () => {

  const [loggedIn, setLoggedIn] = useLocalStorage('loggedIn', false);

  const logTheUserIn = () => {
    console.log('hmmmmmm')
    setLoggedIn(true)
  }

  const logout = () => {

    setLoggedIn(false)
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {
            !loggedIn ? <Redirect to="/login" /> : <Redirect to="/pins" />
          }
        </Route>
        <Route exact path="/login">
          {
            !loggedIn ? <Login logTheUserIn={logTheUserIn} /> : <Redirect to="/pins" />
          }
        </Route>
        <Route exact path="/pins">
          <HomePage logout={logout} />
        </Route>
      </Switch>
    </Router>
  )

  // return (
  //   <div>
  //     {
  //       !loggedIn ? <h1>Log in you fake fan</h1> : <h1>Welcome to Shania Pins</h1>
  //     }
      
  //   </div>
  // )

}

export default App;
