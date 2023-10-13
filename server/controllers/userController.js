const UserModel = require('../models/userModel');

const UserController = {
    getAllUsers: (req, res) => {
        const users = UserModel.getAllUsers();
        res.json({ users });
    },

    addUser: (req, res) => {
        const { id, name, email } = req.body;
        const user = UserModel.addUser(id, name, email);
        res.json({ user });
    }
};

module.exports = UserController;
