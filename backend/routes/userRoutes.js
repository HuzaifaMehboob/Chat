const express = require('express')
const { registerUser,getUser, authUser } = require('../Controllers/userController')
const Authmmiddleware = require('../middlewares/authmiddleware')
const router = express.Router()

router.post('/SignUp',registerUser)
router.post('/Login',authUser)
router.route('/info').get(Authmmiddleware,getUser)

module.exports = router