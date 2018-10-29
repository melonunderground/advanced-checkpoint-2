// * Create actions for loading your models and models loaded
// * loadThings() - do a fetch get to “/things”
// * thingsLoaded(things) - THINGS_LOADED
// * Create an action for saving a new model
// * createThing(thing) - do a fetch post to “/things”
// * when the fetch is complete, dispatch to loadThings
// * Create an action for deleting an item
// * deleteThing(id) - do a fetch delete to “/things/” + id
// * when the fetch is complete, dispatch to loadThings


export function loadHouses() {
  return function (dispatch) {
    fetch("/houses")
    .then( (response) => {
      return response.json();
    }).then((houses) => {
      dispatch(housesLoaded(houses));
    });
  };
}
function housesLoaded(houses) {
  return {
    type: "HOUSES_LOADED",
    value: houses
  };
}

export function createHouse(house) {
    return function (dispatch) {
      fetch("/houses", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(house)
      }).then(() => 
          dispatch(loadHouses()));
    };
  }


  export function deleteHouse(id) {
      return function (dispatch) {
          fetch("/houses/" + id, {
              method: "DELETE",
              headers: {"Content-Type": "application/json"},
      }).then((response) => {
          return response.json();

      }).then(() => {
           dispatch(loadHouses());
          });
      };
    }
  