// export function loadHouses(){
//     return function (dispatch) {
//      dispatch({
//        type: "HOUSES_BEING_LOADED"
//      });
//      fetch("/houses")
//      .then( (response) => {
//        return response.json();
//      }).then((houses) => {
//        dispatch(housesLoaded(houses));
//      });
//    };
//   }
  
// export function housesLoaded(houses) {
//    return {
//      type: "HOUSES_LOADED",
//      value: houses
//    };
//   }
  
// export function createHouse(house) {
//     return function (dispatch) {
//       fetch("/houses", {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(house)
//       }).then((response) => {
//           return response.json();
//       }).then(() => {
//           dispatch(loadHouses());
//     });
//   }
// }

//   export function deleteHouse(id) {
//       return function (dispatch) {
//           fetch("/houses/" + id, {
//               method: "DELETE",
//               headers: {"Content-Type": "application/json"},
//       }).then((response) => {
//           return response.json();

//       }).then(() => {
//            dispatch(loadHouses());
//           });
//       };
//     }
  