// @desc Register new user 
// @routes POST /api/users
// @access Public 

const registerUser = (req, res) => {
    res.json({message: 'Register User'})
}

// @desc Authenticate a user 
// @route POST /api/users/login
// @access Public

const loginUser = (req, res) => {
    res.json({message: 'Login User'})
}

//@desc Get user data 
//@route GET /api/users/me
//@access Public

const getMe = (req, res) => {
    res.json({message: 'User data'})
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
}