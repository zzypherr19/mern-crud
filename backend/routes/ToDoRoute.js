const { Router } = require("express");
const { getToDo } = require("../controllers/ToDoControlle");

const router = Router();

router.get("/", getToDo);

module.exports = router;
