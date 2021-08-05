const obterHoteis = require('../data/hotels.js');

const hotelMaisBarato = (tipoCliente, datasEstadia) => {
    const hoteis = obterHoteis();
    const simulacoes = _construirSimulacoes(hoteis, datasEstadia, tipoCliente);
    return _melhorHotel(simulacoes).nome;
};

const _construirSimulacoes = (hoteis, datasEstadia, tipoCliente) => {
    const simulacoes = [];

    hoteis.forEach((hotel) => {
        const diarias = _calculaDiaria(datasEstadia, hotel, tipoCliente);

        simulacoes.push({
            nome: hotel.nome,
            classificacao: hotel.classificacao,
            total: diarias.reduce((a, b) => a + b, 0)
        });
    });

    return simulacoes;
};

const _calculaDiaria = (datasEstadia, hotel, tipoCliente) => {
    return datasEstadia.map((data) => {
        switch (data.getDay()) {
            case 0:
            case 6:
                return hotel[tipoCliente].finalDeSemana
            default:
                return hotel[tipoCliente].diaDeSemana
        }
    });
}

const _melhorHotel = (simulacoes) => {
    let menorCusto = simulacoes[0];

    simulacoes.forEach((atual) => {
        if (atual.total < menorCusto.total ||
            atual.total === menorCusto.total && atual.classificacao > menorCusto.classificacao) {
            menorCusto = atual;
        }
    });

    return menorCusto;
}

module.exports = hotelMaisBarato;