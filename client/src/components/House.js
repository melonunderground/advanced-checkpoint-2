// * Create a function component that shows details of one thing (UserDetail)
//     * Use a prop that has the array of your models
//     * Use a parameter from the route path /:id to find the model to show
//     * Use whatever html you want to show all of the properties of your thing

import React from 'react';
import { Link } from 'react-router-dom';

function House(props) {
  const houseId = props.match.params.id;
  const house = props.houses.find(h => h._id == houseId) || {};
  return (
    <div>
      <div>
        <p>{house.name}</p>
        <p>{house.description}</p>
        <p>{house.address}</p>
        <p>{house.bedrooms}</p>
        <p>{house.bathrooms}</p>
      </div>
      <div>
        <Link to={"/createhouse/"}><button>create house</button></Link>
        <Link to={"/houses"}><button>houses</button></Link>
        <button onClick={() => { props.deleteHouse(house._id) }}>delete</button>
      </div>
    </div>
  );
}

export default House;

