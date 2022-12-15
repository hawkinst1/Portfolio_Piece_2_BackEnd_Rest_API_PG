// store the CRUD here
const { Router } = require("express");
const router = Router()
const controller = require("./controller")


/**
 * Database for Periodic Table of elements
 */

//get all elements
router.get("/", controller.getAllElements);
//get one element by id
 router.get("/:id", controller.getElementById);
//get element by button?
//router.get("/", controller.getAllElements);
//create new element
router.post("/", controller.createNewElement);
//update element
router.put("/:id", controller.updateElement);
//delete element
router.delete("/:id", controller.deleteElement);

module.exports = router
