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
      <main>
        <section className="content">
        <Link className="links" to="/">← Back to the Menu</Link>
      {currentItem && cart ? (
        <div className="items_container">
          
          <img
            alt={currentItem.name}
             src={`/images/${currentItem.image}`}
        />
          <h2>{`${currentItem.name} - \$${currentItem.price}`}</h2> 

          <p>{currentItem.description}</p>

          <p>
            <button className="items_buttons" onClick={addToCart}>Add to Cart</button>
            <button
              className="items_buttons"
              disabled={!cart.find((p) => p._id === currentItem._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p>
        </div>
      ) : null}
    </section>
</main>
    </>
  );
}

export default Detail;
