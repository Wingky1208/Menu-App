import Auth from "../../utils/auth";
import { NavLink } from "react-router-dom";
import Cart from "../Cart";

function Nav() {
  function showNavigation() {


    if (Auth.loggedIn()) {
      return (
        <ul>
          <li>
            <NavLink to="/Profile">
              Profile
            </NavLink>
          </li>
          <li>
            {/* this is not using the NavLink component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
          <li>
            <Cart />
          </li>
        </ul>
      );
    } else {
      return (
      <span>
            <NavLink to="/signup">
              Signup
            </NavLink>
         
            <NavLink to="/login">
              Login
            </NavLink>
         
            <Cart />
      </span>
      );
    }
  }

  return (
    <header>
        <div className="content">
            <NavLink to="/">
                <img
                  alt="home"
                  src={`./logo.png`}
                />
                <h1>hUNGRY tIME</h1>
            </NavLink>
            <nav>
              {showNavigation()}
            </nav>
        </div>
    </header>
  );
}

export default Nav;
