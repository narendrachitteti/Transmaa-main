const express = require('express');
const router = express.Router();
const RegisterController = require('../Controllers/DeleteUserController');

// Define routes for lab service CRUD operations
router.post('/delregister', RegisterController.RegisterUsers);
router.post('/dellogin', RegisterController.LoginUser);
router.get('/deluserget', RegisterController.getUserByUsername);
router.get('/deluserget', RegisterController.getUserByCredentials);
router.get('/delregister', RegisterController.getAllUserDetails);
router.put('/delregister/:id', RegisterController.updateUserDetail);
router.put('/delrestore/:id', RegisterController.resdeleteUserDetail);

router.delete('/delregister/:id', RegisterController.deleteUserDetail);
module.exports = router;
