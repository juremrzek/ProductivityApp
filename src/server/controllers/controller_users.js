const mongoose = require("mongoose")
const User = mongoose.model("User")

const searchUsers = async (req, res) => {
  try {
    const user_id = req.session.user_id;
    if(!user_id){
        res.status(500).json({
          message: "User is not logged in."
        })
    }
    const query = req.query.search_term
    if (!query) {
      res.status(400).json({ message: "request does not contain search_term." })
      return
    }
    const users = await User.find({
      _id: { $ne: user_id },
      name: { $regex: query, $options: "i" },
    })
    res.status(200).json(users)
  } catch (err) {
    console.log("error", err)
    res.status(500).json({ message: "Server error" })
  }
}

const unfollowUser = async (req, res) => {
  try {
    const user_id = req.session.user_id;
    if(!user_id){
        res.status(500).json({
          message: "User is not logged in."
        })
    }
    const unfollowed_id = req.body.unfollowed_id //whoever logged person is trying to unfollow
    if (!unfollowed_id) {
      res.status(400).json({ message: "request has to contain unfollowed_id." })
      return
    }
    const user = await User.findById(user_id)
    user.following = user.following.filter((id) => id != user_id)
    await user.save()
    res.status(200).json(user.following)
  } catch (err) {
    console.log("error", err)
    res.status(500).json({ message: "Server error" })
  }
}

const followUser = async (req, res) => {
  try {
    const user_id = req.session.user_id;
    if(!user_id){
        res.status(500).json({
          message: "User is not logged in."
        })
    }
    const followed_id = req.body.followed_id //whoever logged person is trying to follow

    if (user_id == followed_id) {
      res.status(400).json({
        message: "followed_id can not be the same as id of the current user.",
      })
      return
    }
    if (!followed_id) {
      res.status(400).json({ message: "request has to contain followed_id." })
      return
    }
    const user = await User.findById(user_id)
    if (user.following.includes(followed_id)) {
      res
        .status(400)
        .json({ message: "current user is already following this user." })
      return
    }
    user.following.push(followed_id)
    await user.save()
    res.status(200).json(user)
  } catch (err) {
    console.log("error", err)
    res.status(500).json({ message: "Server error" })
  }
}

const getFollowing = async (req, res) => {
  try {
    const user_id = req.session.user_id;
    if(!user_id){
        res.status(500).json({
          message: "User is not logged in."
        })
    }
    const user = await User.findById(user_id)
    const following = user.following
    //for each id in following, find the corresponding user in database
    const users = await User.find({ _id: { $in: following } })
    res.status(200).json(users)
    return
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Server error" })
    return
  }
}

module.exports = {
  searchUsers,
  followUser,
  getFollowing,
  unfollowUser,
}
