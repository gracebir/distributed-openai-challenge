const express = require('express')
const route = express.Router();
const { register, login} = require('../controller/user.controller')

route.post('/', register)
route.post('/auth', login)

module.exports = route

