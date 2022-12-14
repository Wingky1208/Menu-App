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
    description,
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
    <div className="item_card_TD">
      <Link to={`/items/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />        
      </Link>
      <div>
        <h3>{name} ${price}</h3>
        <p className="desc">{description}</p>
        <div>
            <button onClick={addToCart}>Add to cart</button>
            <p className="thumbs" onClick={addThumbsUp}>???? {tUp}</p>
            <p className="thumbs" onClick={addThumbsDown}>???? {tDown}</p>
        </div>
      </div>
    </div>
  );

}

export default Item;