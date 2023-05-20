const express = require("express")
const path = require("path")

const router = express.Router()

const controller_users = require("../controllers/controller_users")
const controller_tasks = require("../controllers/controller_tasks")
const controller_issues = require("../controllers/controller_issues")
const controller_auth = require("../controllers/controller_auth");

//task related endpoints
router.get("/getTasks", controller_tasks.getTasks)
router.get("/getStatistics", controller_tasks.getStatistics)
router.post("/addTask", controller_tasks.addTask)
router.put("/editTask", controller_tasks.editTask)
router.patch("/removeTask", controller_tasks.removeTask)
router.patch("/completeTask", controller_tasks.completeTask)

//user related endpoints
router.get("/search", controller_users.searchUsers)
router.get("/getFollowing", controller_users.getFollowing)
router.put("/followUser", controller_users.followUser)
router.patch("/unfollowUser", controller_users.unfollowUser)

//issue related endpoints
router.get("/getUnsolvedIssues", controller_issues.getUnsolvedIssues)
router.post("/addIssue", controller_issues.addIssue)

//auth related endpoints
router.post('/auth/login', controller_auth.login)
router.post('/auth/register', controller_auth.register)

router.get('/', express.static('public'));

module.exports = router
