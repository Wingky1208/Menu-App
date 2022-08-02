import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Cart from "../Cart";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="container">
          <ul className="row justify-content-center">
            <li className="col-4">
              <Link to="/Profile" className="text-white">
                <h4>Profile</h4>
              </Link>
            </li>
            <li className="col-4">
              {/* this is not using the Link component to logout or user and then refresh the application to the start */}
              <a href="/" onClick={() => Auth.logout()} className="text-white">
                <h4>
                Logout
                </h4>
              </a>
            </li>
            <li >
              <Cart className="col-4" />
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="container">
          <ul className="row justify-content-between">
            <li className="col-3">
              <Link to="/signup" className="text-white" >
                <h4>
                Signup
                </h4>
              </Link>
            </li>
            <li className="col-3">
              <Link to="/login" className="text-white" >
                <h4>
                Login
                </h4>
              </Link>
            </li>
            <li className="col-3">
              <Cart />
            </li>
          </ul>
        </div>
      );
    }
  }

  return (
    <div className="container">
      <header className="column">
        <h1 className="col">
            <Link to="/" className="mx-auto">
              Menu-app
            </Link>
        </h1>

        <nav className="col">
          {showNavigation()}
        </nav>
      </header>
    </div>
  );
}

export default Nav;
