import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_ITEMS,
} from '../utils/actions';
import { QUERY_ITEMS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentItem, setCurrentItem] = useState({});

  const { loading, data } = useQuery(QUERY_ITEMS);

  const { items, cart } = state;

  useEffect(() => {
    // already in global store
    if (items.length) {
      setCurrentItem(items.find((item) => item._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_ITEMS,
        items: data.items,
      });

      data.items.forEach((item) => {
        idbPromise('items', 'put', item);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('items', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_ITEMS,
          items: indexedProducts,
        });
      });
    }
  }, [items, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        item: { ...currentItem, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentItem, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentItem._id,
    });

    idbPromise('cart', 'delete', { ...currentItem });
  };

  return (
    <>
      {currentItem && cart ? (
        <div className="container my-1">
          <Link to="/">← Back to Items</Link>

          <h2>{currentItem.name}</h2>

          <p>{currentItem.description}</p>

          <p>
            <strong>Price:</strong>${currentItem.price}{' '}
            <button onClick={addToCart}>Add to Cart</button>
            <button
              disabled={!cart.find((p) => p._id === currentItem._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p>

          <img
            // src={`/images/${currentItem.image}`}
            alt={currentItem.name}
          />
        </div>
      ) : null}
      <Cart />
    </>
  );
}

export default Detail;
