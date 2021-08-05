const hotelMaisBarato = require("../domain/hotel");

test('Deve ter a saída como uma string "Parque das flores."', () => {
    expect(hotelMaisBarato('regular', [
        new Date(2020, 2, 16),
        new Date(2020, 2, 17),
        new Date(2020, 2, 18),
    ])).toBe('Parque das flores');
});

test('Deve ter a saída como uma string "Jardim Botânico."', () => {
    expect(hotelMaisBarato('regular', [
        new Date(2020, 2, 20),
        new Date(2020, 2, 21),
        new Date(2020, 2, 22),
    ])).toBe('Jardim Botânico');
});

test('Deve ter a saída como uma string "Mar Atlântico."', () => {
    expect(hotelMaisBarato('fidelidade', [
        new Date(2020, 2, 26),
        new Date(2020, 2, 27),
        new Date(2020, 2, 28),
    ])).toBe('Mar Atlântico');
});
