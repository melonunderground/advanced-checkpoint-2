import React from 'react';

function House(props) {
    return (
    <div>
      <p>{props.house.name}</p>
      <p>{props.house.address}</p>
      <p>{props.house.type}</p>
      <p>{props.house.bedrooms}</p>
      <p>{props.house.bathrooms}</p>
    </div>
    )
   }

   export default House;

