import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { useMutation } from '@apollo/client';
import { UPDATE_ITEM } from '../../utils/mutations';
import React, { useEffect } from 'react';

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
  
  const [updateItem] = useMutation(UPDATE_ITEM);
  const addThumbsUp = async () => {
    const mutationResponse = await updateItem({
      variables: {
        id: _id,
        thumbsUp: thumbsUp + 1,
      },
    });
  }

  const addThumbsDown = async () => {
    const mutationResponse = await updateItem({
      variables: {
        id: _id,
        thumbsDown: thumbsDown + 1,
      },
    });
  }

  // const addThumbsUp = () => {
  //   thumbsUp.value += thumbsUp.value
  // }

  // const addThumbsDown = () => {
  //   thumbsDown.value += thumbsDown.value
  // }

  return (
    <div className="card px-1 py-1">
      <Link to={`/items/${_id}`}>
        <img
          alt={name}
        // src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      {/* <div onClick={addThumbsUp}>
        <span
          role="img"
          aria-label="thumbsUp"
        >
          👍🏻
        </span>
      </div>
      <div onClick={addThumbsDown}>
        <span>{thumbsUp}</span>
        <span
          role="img"
          aria-label="thumbsDown"
        >
          👎🏻
        </span>
        <span>{thumbsDown}</span>
      </div> */}
      <div>
        <span>${price}</span>
      </div>
        <p onClick={addThumbsUp}>👍 {thumbsUp}</p>
        <p onClick={addThumbsDown}>👎 {thumbsDown}</p>
      <div>
      </div>
      
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Item;
