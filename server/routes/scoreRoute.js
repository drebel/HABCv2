const express = require('express')
const router = express.Router()
const scoreController = require('../controllers/scoreController')

router.get('/', scoreController.getScores)
// router.get('/:id', authController.getScore)
router.post('/', scoreController.postScore)
// router.put('/:id', authController.putScore)
// router.delete('/:id', authController.deleteScore)

// router.post('/signup', authController.postSignup)

module.exports = router