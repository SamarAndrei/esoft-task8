class CarController {
    constructor(carService) {
        this.carService = carService;
    }

    getAllCars = async (req, res) => {
        try {
            const cars = await this.carService.getAllCars(parseInt(req.params.userId, 10));
            res.status(200).json(cars);
        } catch (error) {
            res.status(500).send(error.message);
        }
    };

    getCarById = async (req, res) => {
        try {
            const car = await this.carService.getCarById(parseInt(req.params.userId, 10), parseInt(req.params.carId, 10));
            if (car) {
                res.status(200).json(car);
            } else {
                res.status(404).send('Машина не найдена');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    };

    createCar = async (req, res) => {
        try {
            const newCar = await this.carService.createCar(parseInt(req.params.userId, 10), req.body);
            res.status(201).json(newCar);
        } catch (error) {
            res.status(400).send(error.message);
        }
    };

    updateCar = async (req, res) => {
        try {
            const updatedCar = await this.carService.updateCar(parseInt(req.params.userId, 10), parseInt(req.params.carId, 10), req.body);
            if (updatedCar) {
                res.status(200).json(updatedCar);
            } else {
                res.status(404).send('Машина не найдена');
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    };

    deleteCar = async (req, res) => {
        try {
            const deleted = await this.carService.deleteCar(parseInt(req.params.userId, 10), parseInt(req.params.carId, 10));
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).send('Машина не найдена');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    };
}

module.exports = CarController;