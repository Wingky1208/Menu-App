import React, { useEffect } from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function Nav() {

  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  function showNavigation() {
    

    if (Auth.loggedIn()) {
      return (
        <ul>
          <li>Choose a Category:</li>
          <li>
            <select onClick={(e) => handleClick(e.target.value)}>
            {categories.map((item) => (
              <option
              key={item._id}
              value={item._id}
              >
                {item.name}
              </option>
              ))}
            </select>
          </li>
          <li>
            <Link to="/profile">
              Profile
            </Link>
          </li>
          <li>

            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
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
        </ul>
      );
    }
  }

export default Nav;
