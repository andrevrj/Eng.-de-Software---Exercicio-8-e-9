const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        name: "Gol",
        car: "Volkswagen",
    });
    expect(result).toEqual(undefined);
});
it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        car: "FIAT"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
