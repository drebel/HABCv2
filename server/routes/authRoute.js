const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

router.post('/login', authController.postLogin)
// router.post('/signup', authController.postSignup)
// router.get('/logout', authController.getLogout)

module.exports = router