const Car = require('../src/application/car_service');
const Constants = require('../src/utils/constants');
const Utils = require('../src/utils/utils');
const CarsRepository = require('../src/port/car_repository');
jest.mock('../src/port/car_repository');
it('CREATE - Dado válido', async () => {
    const data = {
        name: "Gol",
        car: "Volkswagen",
    }
    const id = Utils.generateUuid();
    CarsRepository.create.mockResolvedValue({ ...data, id });
    const result = await Car.create(data);
    expect(result).toEqual({ ...data, id });
})

it('CREATE - Dado duplicado', async () => {
    const data = {
        name: "Gol",
        car: "Volkswagen",
    }

    const id = Utils.generateUuid();
    CarsRepository.create.mockResolvedValue({ code: 11000 });
    const result = await Car.create(data);
    expect(result).toEqual(Constants.ErrorDuplicate);
})
