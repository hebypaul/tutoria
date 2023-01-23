const express = require('express')
const router = express.Router()
const {regiserUser, loginUser, getMe, registerUser} = require('../controllers/userController')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)

module.exports = router

