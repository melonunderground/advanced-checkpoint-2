// * Create a class component that makes a new model (redux fetch practice)
//     * Create a form and a button
//     * Put a label and an input for each property your model has
//     * Bonus - use a drop down if there are a limited number of values for a property
//     * Register onChange for each input and use setState to store the information typed in
//     * Register onSubmit for the form. 
//     * onSubmit call an action called createThing(change it to make sense for your model)


import React from 'react';
import { Link } from 'react-router-dom';

class CreateHouse extends React.Component {
  constructor() {
    super();
    this.state = {
      house: {
        name: "",
        description: "",
        address: "",
        bedrooms: "",
        bathrooms: ""

      }
    }
  }

  // clearOnSubmit = () => {
  //   this.setState({
  //     house: {
  //       name: "",
  //       description: "",
  //       address: "",
  //       bedrooms: "",
  //       bathrooms: ""
  //     }
  //   }
  //   )
  // }

  render() {
    return (
      <div>
        <h1>create house</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          if (this.props.createHouse) {
            this.props.createHouse(this.state.house);
          }

        }}>

          <div>

            Name: <input onChange={(e) => {
              const house = { name: e.target.value };
              this.setState({
                house: Object.assign(this.state.house, house)
              });
            }} />
          </div>
          <div>
            Description: <input onChange={(e) => {
              const house = { description: e.target.value };
              this.setState({
                house: Object.assign(this.state.house, house)
              });
            }} />
          </div>
          <div>
            Address: <input onChange={(e) => {
              const house = { address: e.target.value };
              this.setState({
                house: Object.assign(this.state.house, house)
              });
            }} />
          </div>
          <div>
            Bedrooms: <input onChange={(e) => {
              const house = { bedrooms: e.target.value };
              this.setState({
                house: Object.assign(this.state.house, house)
              });
            }} />
          </div>
          <div>
            Bathrooms: <input onChange={(e) => {
              const house = { bathrooms: e.target.value };
              this.setState({
                house: Object.assign(this.state.house, house)
              });
            }} />
          </div>
          <button type='submit'>save</button>

          <Link to={"/houses"}><button>houses</button></Link>

        </form>
      </div>

    )
  }
}


export default CreateHouse;
