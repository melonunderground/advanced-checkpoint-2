
// ### React
// * Create a function component that list out a collection of your models (ListOfUsers)

//     * Use prop types to define what props the component needs
//     * It should probably need a prop named after the plural of your model, and it should probably be an array
//     * Probably want to map over this array and create some divs or li’s showing 3 of the properties of the item
//     * Create a Link on each item so you can navigate to the detail page 
//     * Create a button on each item so you can delete the item

import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";


function Houses (props) {
    const houseDivs = props.houses.map((house,index)=> {

    return (
        <div key={index}>
            <ul>
                <li>{house.name}</li>
                <li>{house.description}</li>
                <li>{house.address}</li>
            </ul>
            <Link to={"/house/" + house._id}><button>view</button></Link>
            <button onClick={() => {props.deleteHouse(house._id)}}>delete</button>
       </div>);
      
   })
    return (
        <div>
        <Link to={"/createhouse/"}><button>create house</button></Link>
        <div>{houseDivs}</div>
        </div>
    );
}


Houses.propTypes = {
    houses:PropTypes.array.isRequired
};

export default Houses;
