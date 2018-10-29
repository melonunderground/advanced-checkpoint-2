// * Create a class component that makes a new model (redux fetch practice)
//     * Create a form and a button
//     * Put a label and an input for each property your model has
//     * Bonus - use a drop down if there are a limited number of values for a property
//     * Register onChange for each input and use setState to store the information typed in
//     * Register onSubmit for the form. 
//     * onSubmit call an action called createThing(change it to make sense for your model)


import React from 'react';

class CreateHouse extends React.Component {
 constructor() {
   super();
   this.state = {
     house: {
     name:"",
     address:"",
     type:"",
     bathrooms:"",
     bedrooms:""
    }
  }
 }

 render(){
   return (
     <div>
     <h1>house</h1>
     <form onSubmit={(e) => {
        e.preventDefault();
      if (this.props.createHouse) {
        this.props.createHouse(this.state.house);
      }

     }}>

     <div>

     Name: <input onChange={(e) => {
       const house = {name: e.target.value};
       this.setState({
         house: Object.assign(this.state.house,house)
       });
     }} />
     </div>
     <div>
      Address: <input onChange={(e) => {
        const house = {address: e.target.value};
          this.setState({
          house: Object.assign(this.state.house,house)
          });
        }} />
      </div>
      <div>
      Type: <input onChange={(e) => {
        const house = {type: e.target.value};
        this.setState({
          house: Object.assign(this.state.house,house)
        });
      }} />
    </div>
    <div>
      Bedrooms: <input onChange={(e) => {
        const house = {bedrooms: e.target.value};
      this.setState({
        house: Object.assign(this.state.house,house)
      });
    }} />
  </div>
  <div>
      Bathrooms: <input onChange={(e) => {
        const house = {bathrooms: e.target.value};
    this.setState({
      house: Object.assign(this.state.house,house)
    });
  }} />
</div>
<button>create</button>
</form>
</div>

   )
 }
}


export default CreateHouse;
