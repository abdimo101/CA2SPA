import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <li>
        <NavLink exact activeClassName="selected" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="selected" to="/cryptopage">
          Crypto
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="selected" to="/allapispage">
          All Apis
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="selected" to="/jokespage">
          Jokes
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="selected" to="/catfactspage">
          CatFacts
        </NavLink>
      </li>
      {/*<li>
        <NavLink exact activeClassName="selected" to="/advicepage">
          Advice
        </NavLink>
      </li>
      */}
    </div>
  );
}

export default Header;
