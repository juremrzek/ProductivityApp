//let currentUserId = "6467acb5865606744d282484"; - test id

const getCurrentUserId = () => {
    return currentUserId;
}

const setCurrentUserId = (user_id) => {
    currentUserId = user_id;
}

const login = (req, res) => {
    const user_id = req.body.user_id;
    if(!user_id){
        res.json({message: "request body does not contain user_id"});
        return;
    }
    req.session.user_id = user_id;
    console.log("session is now set to", user_id);
    res.json({message: user_id});
};

module.exports = {
    getCurrentUserId,
    setCurrentUserId,
    login
};