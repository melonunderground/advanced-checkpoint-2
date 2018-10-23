// * Create a class component that makes a new model (redux fetch practice)
//     * Create a form and a button
//     * Put a label and an input for each property your model has
//     * Bonus - use a drop down if there are a limited number of values for a property
//     * Register onChange for each input and use setState to store the information typed in
//     * Register onSubmit for the form. 
//     * onSubmit call an action called createThing(change it to make sense for your model)


import React, { Component } from 'react';

class CreateHouse extends Component{
 constructor(){
   this.state = {
     name:"",
     address:"",
     type:"",
     bathrooms:"",
     bedrooms:""
    };
 }

 render(){
   return (
     <div>
     <h1>house</h1>
     <form onSubmit={(event) => {
        event.preventDefault();
      if (this.props.createHouse) {
        this.props.createHouse(this.state);
      }

     }}>

     <div>

     name: <input onChange={(event) => {
       this.setState({
         name: event.target.value
       });
     }} />
     </div>
     <div>
        address: <input onChange={(event) => {
          this.setState({
            address: event.target.value
          });
        }} />
      </div>
      <div>
      type: <input onChange={(event) => {
        this.setState({
          type: event.target.value
        });
      }} />
    </div>
    <div>
    bedrooms: <input onChange={(event) => {
      this.setState({
        bedrooms: event.target.value
      });
    }} />
  </div>
  <div>
  bathrooms: <input onChange={(event) => {
    this.setState({
      bathrooms: event.target.value
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
