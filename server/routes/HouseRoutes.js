// * In the Route, create routes for getting all things, getting one thing by id, deleting one thing, updating one thing, and creating one thing

let express =  require("express");
const router = express.Router();
let {list,show,create,update,remove} = require( "../controllers/HouseController");


router.get("/houses", list);
router.get("/house/:id", show);
router.post("/houses", create);
// router.put("/houses/:id", update);
router.delete("/houses/:id", remove);

module.exports =  router;