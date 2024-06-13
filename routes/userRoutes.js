const express = require('express');

module.exports = (userContoller) => {
    const router = express.Router();

    router.post('/users', userContoller.createUser);
    router.get('/users', userContoller.getAllUsers);
    router.get('/users/:id', userContoller.getUserById);
    router.put('/users/:id', userContoller.updateUser);
    router.delete('/users/:id', userContoller.deleteUser);

    return router;
}