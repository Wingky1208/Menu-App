import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function Profile() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container-login" >
        <Link to="/">← Back to Items</Link>

        {user ? (
          <>
            <h2>
              Order History for {user.firstName} {user.lastName}
            </h2>
            {user.orders.map((order) => (
              <div key={order._id} className="">
                <h3>
                  {`Order from ${new Date(parseInt(order.purchaseDate)).toLocaleDateString()}:`}
                </h3>
                <div className="flex-row">
                  {order.items.map(({ _id, image, name, price }, index) => (
                    <div key={index}>
                      <Link to={`/items/${_id}`}>
                        <img alt={name}
                        src={`/images/${image}`} 
                        />
                        <h5 className='text-white' >{name}</h5>
                      </Link>
                      <div>
                        <h5 className='text-white' >${price}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default Profile;
