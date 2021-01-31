const userController = require('./controllers/user.controller');
const routes = function (app) {
    app.get('/users', userController.getUsers);
    app.get('/users/:id', userController.getUser);
    app.post('/users', userController.addUser);
    app.put('/users/:id', userController.updateUser);
    app.delete('/users/:id', userController.deleteUser);
}
module.exports = routes;