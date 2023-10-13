const users = [];

class UserModel {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    static getAllUsers() {
        return users;
    }

    static addUser(id, name, email) {
        const user = new UserModel(id, name, email);
        users.push(user);
        return user;
    }
}

module.exports = UserModel;