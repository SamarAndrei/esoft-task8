class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }

    async createUser(userData) {
        return this.userModel.create(userData);
    }

    async getAllUsers() {
        return this.userModel.getAll();
    }

    async getUserById(id) {
        return this.userModel.getById(id);
    }

    async updateUser(id, userData) {
       return this.userModel.update(id, userData); 
    } 

    async deleteUser(id) {
        return this.userModel.delete(id);
    }
}

module.exports = UserService;