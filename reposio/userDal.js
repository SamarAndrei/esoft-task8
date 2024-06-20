let users = [
    {
      "id": 1,
      "name": "Иван",
      "email": "ivan@example.com",
      "age": 30
    },
    {
      "id": 2,
      "name": "Мария",
      "email": "maria@example.com",
      "age": 25
    },
    {
      "id": 3,
      "name": "Петр",
      "email": "petr@example.com",
      "age": 35
    },
    {
      "id": 4,
      "name": "Анна",
      "email": "anna@example.com",
      "age": 28
    },
    {
      "id": 5,
      "name": "Елена",
      "email": "elena@example.com",
      "age": 40
    },
    {
      "id": 6,
      "name": "Алексей",
      "email": "alexey@example.com",
      "age": 32
    },
    {
      "id": 7,
      "name": "Ольга",
      "email": "olga@example.com",
      "age": 27
    },
    {
      "id": 8,
      "name": "Сергей",
      "email": "sergey@example.com",
      "age": 45
    },
    {
      "id": 9,
      "name": "Наталья",
      "email": "natalya@example.com",
      "age": 33
    },
    {
      "id": 10,
      "name": "Дмитрий",
      "email": "dmitry@example.com",
      "age": 29
    }
  ]

class UserModel {
    async create(userData) {
        const user = {
            id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
            ...userData
        }
        await users.push(user);
        return user;
    }

    async getAll() {
        return users;
    }

    async getById(id) {
        return users.find(user => id === user.id)
    }

    async update(id, userData) {
        const userIndex = users.findIndex(user => user.id === id);
        users[userIndex] = { ...users[userIndex], ...userData };
        return users[userIndex];
    }

    async delete(id) {
        const userIndex = await users.findIndex(user => user.id === id);
        users.splice(userIndex, 1);
        return true;
    }
}

module.exports = new UserModel(), users;