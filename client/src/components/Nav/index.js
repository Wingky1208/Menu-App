import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Cart from "../Cart";

function Nav() {
  function showNavigation() {


    if (Auth.loggedIn()) {
      return (
        <ul>
          <li>
            <Link to="/Profile">
              Profile
            </Link>
          </li>
          <li>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
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
        <ul>
          <li>
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
          <li>
            <Cart />
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          Menu-app
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
