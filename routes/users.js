const express = require('express');
const router = express.Router();
const { APP_NAME } = process.env
const verifyToken = require("../middleware/verifyToken");

const usersHandler = require('./handler/users')

router.post("/register", usersHandler.register);
router.post("/login", usersHandler.login);
router.put("/", verifyToken, usersHandler.update);

module.exports = router;
