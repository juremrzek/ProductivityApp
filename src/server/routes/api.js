const express = require('express');
const path = require('path');

const router = express.Router();

controller_users = require('../controllers/controller_users');

console.log(controller_users)

router.get('/getAllUsers', controller_users.getAllUsers);

module.exports = router;
