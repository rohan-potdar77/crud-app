const express = require("express");

const controller = require("./controller");
const router = express.Router();

router.post("/", controller.handlePost);

router.get("/", controller.handleGet);

router.put("/:id", controller.handlePut);

router.delete("/:id", controller.handleDelete);

module.exports = router;
