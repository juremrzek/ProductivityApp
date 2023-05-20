const express = require("express")
const path = require("path")

const router = express.Router()

controller_users = require("../controllers/controller_users")
controller_tasks = require("../controllers/controller_tasks")
controller_issues = require("../controllers/controller_issues")

//task related endpoints
router.get("/getTasks", controller_tasks.getTasks)
router.post("/addTask", controller_tasks.addTask)
router.put("/editTask", controller_tasks.editTask)
router.patch("/removeTask", controller_tasks.removeTask)
router.patch("/completeTask", controller_tasks.completeTask)

//user related endpoints
router.get("/search", controller_users.searchUsers)
router.get("/getFollowing", controller_users.getFollowing)
router.post("/createUser", controller_users.createUser)
router.put("/followUser", controller_users.followUser)
router.patch("/unfollowUser", controller_users.unfollowUser)

//issue related endpoints
router.get("/getUnsolvedIssues", controller_issues.getUnsolvedIssues)
router.post("/addIssue", controller_issues.addIssue)

module.exports = router
