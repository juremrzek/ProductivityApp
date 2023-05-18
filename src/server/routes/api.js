const express = require('express');
const path = require('path');

const router = express.Router();

controller_users = require('../controllers/controller_users');
controller_tasks = require('../controllers/controller_tasks');

router.get('/getAllUsers', controller_users.getAllUsers);
router.get('/getTasks', controller_tasks.getTasks);

router.post('/createUser', controller_users.createUser);
router.post('/addTask', controller_tasks.addTask);

router.put('/editTask', controller_tasks.editTask);

router.delete('/removeTask', controller_tasks.removeTask);
router.delete('/completeTask', controller_tasks.completeTask);

module.exports = router;
