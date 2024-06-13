class CarService {
    constructor(carDAL) {
        this.carDAL = carDAL;
    }

    async getAllCars(userId) {
        return this.carDAL.getAll(userId);
    }

    async getCarById(userId, carId) {
        return this.carDAL.getById(userId, carId);
    }

    async createCar(userId, carData) {
        const { model, year, color } = carData;
        if (!model || !color || !year) {
            throw new Error('Необходимо указать модель, производителя и год выпуска');
        }

        if (typeof model !== 'string' || typeof color !== 'string') {
            throw new Error('Модель и цвет должны быть строкой');
        }

        if (typeof year !== 'number' || year <= 0) {
            throw new Error('Год выпуска должен быть положительным числом');
        }

        return this.carDAL.create(userId, carData);
    }

    async updateCar(userId, carId, carData) {
        const { model, year, color  } = carData;

        if (model && typeof model !== 'string') {
            throw new Error('Модель должна быть строкой');
        }

        if (color && typeof color !== 'string') {
            throw new Error('Цвет должен быть строкой');
        }

        if (typeof year !== 'undefined' && (typeof year !== 'number' || year <= 0)) {
            throw new Error('Год выпуска должен быть положительным числом');
        }

        return this.carDAL.update(userId, carId, carData);
    }

    async deleteCar(userId, carId) {
        return this.carDAL.delete(userId, carId);
    }
}

module.exports = CarService;