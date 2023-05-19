let currentUserId = "6467acb5865606744d282484";

const getCurrentUserId = () => {
    return currentUserId;
}

const setCurrentUserId = (user_id) => {
    currentUserId = user_id;
}

module.exports = {
    getCurrentUserId,
    setCurrentUserId
};