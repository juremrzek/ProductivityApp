const express = require('express');
const path = require('path');

const router = express.Router();

controller_users = require('../controllers/controller_users');
controller_tasks = require('../controllers/controller_tasks');

//task related endpoints
router.get('/getTasks', controller_tasks.getTasks);

router.post('/createUser', controller_users.createUser);
router.post('/addTask', controller_tasks.addTask);

router.put('/editTask', controller_tasks.editTask);

router.delete('/removeTask', controller_tasks.removeTask);
router.delete('/completeTask', controller_tasks.completeTask);

//user retated endpoints
router.get('/getAllUsers', controller_users.getAllUsers);
router.get('/searchUsers', controller_users.searchUsers);
router.get('/getFollowing', controller_users.getFollowing);

router.post('/followUser', controller_users.followUser);

module.exports = router;