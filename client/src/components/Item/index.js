import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { useMutation } from '@apollo/client';
import { UPDATE_ITEM } from '../../utils/mutations';
import React, { useState } from 'react';

function Item(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    thumbsUp,
    thumbsDown,
  } = item;

  const { cart } = state
  
  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        item: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }
  
  const [tUp, setTUP] = useState(thumbsUp);
  
  const [updateItem] = useMutation(UPDATE_ITEM);
  const addThumbsUp = async () => {
    if(tUp === thumbsUp) {
      await updateItem({
        variables: {
          id: _id,
          thumbsUp: tUp + 1,
        },
      });
      setTUP(tUp + 1)
    }
  }
  
  const [tDown, setTDown] = useState(thumbsDown);

  const addThumbsDown = async () => {
    if(tDown === thumbsDown) {
      await updateItem({
        variables: {
          id: _id,
          thumbsDown: tDown + 1,
        },
      });
      setTDown(tDown + 1)
    }
  }

  return (
    <div>
      <Link to={`/items/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <span>${price}</span>
      </div>
        <p onClick={addThumbsUp}>👍 {tUp}</p>
        <p onClick={addThumbsDown}>👎 {tDown}</p>
      <div>
      </div>
      
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Item;
