import Auth from "../../utils/auth";
import { NavLink } from "react-router-dom";
import Cart from "../Cart";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <span>
            <NavLink className="links" to="/Profile">
              Profile
            </NavLink>
          
            {/* this is not using the NavLink component to logout or user and then refresh the application to the start */}
            <a className="links" href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          
            <Cart />
        </span>  
      );
    } else {
      return (
      <span>
            <NavLink className="links" to="/signup">
              Signup
            </NavLink>
         
            <NavLink className="links" to="/login">
              Login
            </NavLink>
         
            <Cart />
      </span>
      );
    }
  }

  return (
    <header>
        <section className="content">
            <NavLink to="/">
                <img
                  alt="home"
                  src={`logo.png`}
                />
                <h1>Hungry<span>Time</span></h1>
            </NavLink>
            <nav>
              {showNavigation()}
            </nav>
        </section>
    </header>
  );
}

export default Nav;
