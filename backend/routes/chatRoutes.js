const express = require('express')
const {accessChat,fetchChats} = require('../Controllers/chatController')
const Authmmiddleware = require('../middlewares/authmiddleware')

const router = express.Router()

router.route('/all').get(Authmmiddleware,fetchChats)

module.exports = router