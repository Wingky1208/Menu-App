import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Cart from "../Cart";
import './style.css';

// import {
//   Navbar,
//   Nav
// } from 'react-bootstrap';


// function NavStrap(props) {

//   if (Auth.loggedIn()) {
//     return (
//       <Navbar bg="dark" variant='dark' expand="lg">
//         <Navbar.Brand href="/">{'Menu-app'}</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">

//             <Nav.Link href="/Profile">Profile</Nav.Link>
//             <Nav.Link href="/" onClick={() => Auth.logout()}>Logout</Nav.Link>
//             {/* <Nav.Link >  <Cart /></Nav.Link> */}
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     )
//   } else {
//     return (
//       <Navbar bg="dark" variant='dark' expand="lg">
//         <Navbar.Brand href="/">{'Menu-app'}</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">

//             <Nav.Link href="/signup">Signup</Nav.Link>
//             <Nav.Link href="/login">Login</Nav.Link>
//             {/* <Nav.Link >  <Cart /></Nav.Link> */}
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     )
//   }

// }


// export default NavStrap;


function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (

        <ul >
          <li className="mx-1">
            <Link to="/Profile">
              Profile
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
          <li >
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
