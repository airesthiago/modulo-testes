const chai = require('chai');
const expect = chai.expect;

const divideNumeros = (a, b) => {
    if (typeof a === "number" && typeof b === "number") return a / b;
    else return undefined;
}

describe('Teste de Divisão', () => {
    it('1º teste: Divisão de dois números – 9 e 3', (done) => {
        const resultado = divideNumeros(9, 3);
        expect(resultado).be.equal(3);
        done();
    })
    it('2º teste: Divisão com número negativo – (-9) e 3', (done) => {
        const resultado = divideNumeros(-9, 3);
        expect(resultado).be.equal(-3);
        done();
    })
    it('3º teste: Divisão de string com número – "nove" e 3', (done) => {
        const resultado = divideNumeros("nove", 3);
        expect(resultado).be.equal(undefined);
        done();
    })
    it('4º teste: Divisão com apenas um parâmetro – 9 e ', (done) => {
        const resultado = divideNumeros(9, );
        expect(resultado).be.equal(undefined);
        done();
    })
})
