const chai = require('chai');
const expect = chai.expect;

const subtrairNumeros = (a, b) => {
    if (typeof a === "number" && typeof b === "number") return a - b;
    else return undefined;
}

describe('Teste de Subtração', () => {
    it('1º teste: Subtração de dois números – 4 e 2', (done) => {
        const resultado = subtrairNumeros(4, 2);
        expect(resultado).be.equal(2);
        done();
    })
    it('2º teste: Subtração com número negativo – (-4) e 2', (done) => {
        const resultado = subtrairNumeros(-4, 2);
        expect(resultado).be.equal(-6);
        done();
    })
    it('3º teste: Subtração de string com número – "quatro" e 2', (done) => {
        const resultado = subtrairNumeros("quatro", 2);
        expect(resultado).be.equal(undefined);
        done();
    })
    it('4º teste: Subtração com apenas um parâmetro – 4 e ', (done) => {
        const resultado = subtrairNumeros(4, );
        expect(resultado).be.equal(undefined);
        done();
    })
})
