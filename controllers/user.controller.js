const model = require('./../models/user.model');
function getUsers(req, res) {
    model.getUsers().then(function (data) {
        res.status(200).json(data);
    }).catch(function (err) {
        res.status(400).json(err);
    });
}
function getUser(req, res) {
    let id = req.params.id;
    model.getUser(id).then(function (result) {
        res.status(200).json(result);
    }).catch(function (err) {
        res.status(400).json(err);
    });
}
function addUser(req, res) {
    const data = req.body;
    model.addUser(data).then(function (result) {
        res.status(200).json(result);
    }).catch(function (err) {
        res.status(400).json(err);
    });

}
function updateUser(req, res) {
    model.updateUser(req.params.id, req.body).then(function (result) {
        res.status(200).json(result);
    }).catch(function (err) {
        res.status(400).json(err);
    });
}
function deleteUser(req, res) {
    let id = req.params.id;
    model.deleteUser(id).then(function (result) {
        res.status(200).json(result);
    }).catch(function (err) {
        res.status(400).json(err);
    });
}
module.exports = {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
};