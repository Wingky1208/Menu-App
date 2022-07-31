import React, { useEffect } from 'react';
import Item from '../Item';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_ITEMS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_ITEMS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_ITEMS,
        items: data.items,
      });
      data.items.forEach((item) => {
        idbPromise('items', 'put', item);
      });
    } else if (!loading) {
      idbPromise('items', 'get').then((items) => {
        dispatch({
          type: UPDATE_ITEMS,
          items: items,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterItems() {
    if (!currentCategory) {
      return state.items;
    }

    return state.items.filter(
      (item) => item.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Our Items:</h2>
      {state.items.length ? (
        <div className="flex-row">
          {filterItems().map((item) => (
            <Item
              key={item._id}
              _id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
              thumbsUp={item.thumbsUp}
              thumbsDown={item.thumbsDown}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any items yet!</h3>
      )}
    </div>
  );
}

export default ProductList;
