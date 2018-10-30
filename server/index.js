// * Use express to create a server listening on port 3001
// * Use mongoose to connect to a MongoDB database called “checkpoint2”

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
var promise = mongoose.connect("mongodb://dane:letmein123@ds143953.mlab.com:43953/checkpoint2", {
  useMongoClient: true,
});

import HouseRoutes from "./routes/HouseRoutes";

const app = express();
app.use(bodyParser.json());

app.use(HouseRoutes);



const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
