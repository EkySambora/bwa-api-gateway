const express = require('express');
const router = express.Router();
const { APP_NAME } = process.env

const usersHandler = require('./handler/users')

router.post("/register", usersHandler.register);
router.post("/login", usersHandler.login);

module.exports = router;
