// * In the Controller, create functions for list,show,create,update,remove

const HouseModel = require("../models/HouseModel");
   
module.exports.list =  function list(request, response) {
    HouseModel.find({}).exec()
    .then(house => {
        return response.json(house);
    });
}

module.exports.show =  function show(request, response) {
    HouseModel.findById(request.params.id).exec()
    .then(house => {
        return response.json(house)
    })
}
    
module.exports.create =  function create(request, response) {
    const newHouse = new HouseModel({
        name: request.body.year,
        description: request.body.make,
        phone: request.body.model,
        address: request.body.address,
        numberOfBedrooms: request.body.numberOfBedrooms,
        numberOfBathrooms: request.body.numberOfBathrooms

    });
    newHouse.save()
    .then(savedHouse => {
        return response.json(savedHouse)
    });
} 

// module.exports.update =  function update(request, response) {
//         return response.json({theId: request.params.id});
//        }

module.exports.remove =  function remove(request, response) {
        return HouseModel.findByIdAndRemove(request.params.id).exec().then(house => response.json(house))
       }




