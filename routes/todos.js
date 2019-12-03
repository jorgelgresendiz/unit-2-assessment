var express = require("express");
var router = express.Router();
var todosCtrl = require("../controllers/todos");

/* GET todos */
router.get("/", todosCtrl.index); //show all
router.post("/", todosCtrl.create); //create new one
router.delete("/:id", todosCtrl.delete); //delete one

module.exports = router;
