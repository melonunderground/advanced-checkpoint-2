const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    address: {
        type: String
    },
    numberOfBedrooms: {
        type: Number
    },
    numberOfBathrooms: {
        type: Number
    }
});

module.exports = mongoose.model("House", houseSchema);
