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
    <main>
        <section className="content">
      <div>
        <Link to="/">← Back to Items</Link>

        {user ? (
          <>
            <h2>
              Order History for {user.firstName} {user.lastName}
            </h2>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <div className="past_order">
                <h3>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                  {order.items.map(({ _id, image, name, price }, index) => (
                    <div key={index}>
                      <Link to={`/items/${_id}`}>
                        <img alt={name} 
                        src={`/images/${image}`} 
                        />
                        <p>{name}</p>
                      </Link>
                      <p>{price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
      </section>
    </main>
    </>
  );
}

export default Profile;
