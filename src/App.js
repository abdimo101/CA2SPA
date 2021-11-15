import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "./style2.css";
import Header from "./components/Header";
import Crypto from "./components/Crypto";
import AllApis from "./components/AllApis";
import Jokes from "./components/Jokes";
import facade from "./apiFacade";
import LoggedIn from "./components/LoggedIn";
import LogIn from "./components/Login";
import Advice from "./components/Advice";
import CatFacts from "./components/CatFacts";
import "./index.css"

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App(props) {
  return (
    <Router>
      <div>
        <ul className="header">
          <Header />
        </ul>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cryptopage">
              <Crypto facade={props.facade} />
            </Route>
            <Route path="/allapispage">
              <AllApis facade={props.facade}/>
            </Route>
            <Route path="/jokespage">
              <Jokes facade={props.facade} />
            </Route>
            <Route path="/catfactspage">
              <CatFacts facade={props.facade} />
            </Route>
            <Route path="/advicepage">
              <Advice facade={props.facade} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };
  const login = (user, pass) => {
    facade.login(user, pass).then((res) => setLoggedIn(true));
  };

  return (
    <div>
      <h2>Frontend Startcode</h2>
      <div>
        {!loggedIn ? (
          <LogIn login={login} />
        ) : (
          <div>
            <LoggedIn facade={facade} />
            <button onClick={logout}>Logout</button>
          </div>
        )}
      </div>
      <p>username: user | password: test1 <br/> username: admin | password: test2</p>
      
      <h3>How it works</h3>
      <li>As a guest, you only get access to All APIs page</li>
      <li>If you log in as user, you get access to Crypto, All APIs & CatFacts pages</li>
      <li>If you log in as admin, you get access to All APIs & Jokes pages</li>
    </div>
  );
}
