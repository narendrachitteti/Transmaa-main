const express = require('express');
const router = express.Router();
const RegisterController = require('../Controllers/RegisterController.js');

// Define routes for lab service CRUD operations
router.post('/register', RegisterController.RegisterUsers);
router.post('/login', RegisterController.LoginUser);
router.get('/userget/:username', RegisterController.checkUsername);
router.get('/userget', RegisterController.getUserByUsername);
router.get('/userget', RegisterController.getUserByCredentials);
router.get('/register', RegisterController.getAllUserDetails);
router.put('/register/:id', RegisterController.updateUserDetail);
router.delete('/register/:id', RegisterController.deleteUserDetail);
module.exports = router;
