const UserModel = require('./userDal'); 

let cars = [
    {
      "id": 1,
      "user_id": 1,
      "model": "Tesla Model S",
      "year": 2022,
      "color": "black"
    },
    {
      "id": 2,
      "user_id": 2,
      "model": "BMW i3",
      "year": 2020,
      "color": "white"
    },
    {
      "id": 3,
      "user_id": 3,
      "model": "Audi e-tron",
      "year": 2021,
      "color": "blue"
    },
    {
      "id": 4,
      "user_id": 4,
      "model": "Nissan Leaf",
      "year": 2019,
      "color": "silver"
    },
    {
      "id": 5,
      "user_id": 5,
      "model": "Chevrolet Bolt",
      "year": 2023,
      "color": "red"
    },
    {
      "id": 6,
      "user_id": 6,
      "model": "Kia Soul EV",
      "year": 2020,
      "color": "gray"
    },
    {
      "id": 7,
      "user_id": 7,
      "model": "Hyundai Kona Electric",
      "year": 2022,
      "color": "green"
    },
    {
      "id": 8,
      "user_id": 8,
      "model": "Jaguar I-PACE",
      "year": 2021,
      "color": "black"
    },
    {
      "id": 9,
      "user_id": 1,
      "model": "Volkswagen ID.4",
      "year": 2023,
      "color": "blue"
    },
    {
      "id": 10,
      "user_id": 10,
      "model": "Porsche Taycan",
      "year": 2022,
      "color": "white"
    }
  ];

  class CarModel {
    async getAll(userId) {
        const user = await UserModel.getById(userId); 
        if (!user) {
            throw new Error('Пользователь не найден');
        }
        const userCars = cars.filter(car => car.user_id === user.id);
        return userCars || [];
    }

    async getById(userId, carId) {
        const user = await UserModel.getById(userId)
        if (!user) {
            throw new Error('Пользователь не найден');
        }
        const car = cars.find(car => car.user_id === user.id && car.id === carId)
        if(car) {
            return car
        } else {
            throw new Error('Машина не найдена');
        }
    }

    async create(userId, carData) {
        const user = await UserModel.getById(userId)
        if (!user) {
            throw new Error('Пользователь не найден');
        }
        const newCarId = cars.length ? cars[cars.length - 1].id + 1 : 1;
        const newCar = { id: newCarId, user_id: userId , ...carData };
        cars.push(newCar);
        return newCar;
    }

    async update(userId, carId, carData) {
        const user = await UserModel.getById(userId)
        if (!user) {
            throw new Error('Пользователь не найден');
        }
        const carIndex = cars.findIndex(car => car.id === parseInt(carId));
        cars[carIndex] = { ...cars[carIndex], user_id: userId, ...carData };
        return cars[carIndex];        
    }

    async delete(userId, carId) {
        const user = await UserModel.getById(userId)
        if (!user) {
            throw new Error('Пользователь не найден');
        }
        const carIndex = cars.findIndex(car => car.id === parseInt(carId));
        cars.splice(carIndex, 1);
        return true;
    }
}

module.exports = new CarModel();