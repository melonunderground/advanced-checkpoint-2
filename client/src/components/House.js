// * Create a function component that shows details of one thing (UserDetail)
//     * Use a prop that has the array of your models
//     * Use a parameter from the route path /:id to find the model to show
//     * Use whatever html you want to show all of the properties of your thing

import React from 'react';

function House(props) {
  const houseId = props.match.params.id;
  const house = props.houses.find(h => h.id == houseId) || {};
    return (
    <div>
      <p>{house.name}</p>
      <p>{house.address}</p>
      <p>{house.type}</p>
      <p>{house.bedrooms}</p>
      <p>{house.bathrooms}</p>
    </div>
    );
   }

   export default House;

