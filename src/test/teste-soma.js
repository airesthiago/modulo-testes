const chai = require('chai');
const expect = chai.expect;

const somarNumeros = (a, b) => {
    if (typeof a === "number" && typeof b === "number") return a + b;
    else return undefined;
}

describe('Teste de Soma', () => {
    it('1º teste: Soma de dois números – 2 e 4', (done) => {
        const resultado = somarNumeros(2, 4);
        expect(resultado).be.equal(6);
        done();
    })
    it('2º teste: Soma com número negativo – (-2) e 4', (done) => {
        const resultado = somarNumeros(-2, 4);
        expect(resultado).be.equal(2);
        done();
    })
    it('3º teste: Soma de string com número – "dois" e 4', (done) => {
        const resultado = somarNumeros("dois", 4);
        expect(resultado).be.equal(undefined);
        done();
    })
    it('4º teste: Soma com apenas um parâmetro – 2 e ', (done) => {
        const resultado = somarNumeros(2, );
        expect(resultado).be.equal(undefined);
        done();
    })
})
