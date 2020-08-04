const express = require("express");
const router = express.Router();

const userRoute = require("./userRoutes");
const todoRoute = require("./todoRoutes");

router.use(userRoute);
router.use(todoRoute);

module.exports = router;
