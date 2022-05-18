const chai = require('chai');
const expect = chai.expect;

const multiplicaNumeros = (a, b) => {
    if (typeof a === "number" && typeof b === "number") return a * b;
    else return undefined;
}

describe('Teste de Multiplicação', () => {
    it('1º teste: Multiplicação de dois números – 3 e 5', (done) => {
        const resultado = multiplicaNumeros(3, 5);
        expect(resultado).be.equal(15);
        done();
    })
    it('2º teste: Multiplicação com número negativo – (-3) e 5', (done) => {
        const resultado = multiplicaNumeros(-3, 5);
        expect(resultado).be.equal(-15);
        done();
    })
    it('3º teste: Multiplicação de string com número – "três" e 5', (done) => {
        const resultado = multiplicaNumeros("três", 5);
        expect(resultado).be.equal(undefined);
        done();
    })
    it('4º teste: Multiplicação com apenas um parâmetro – 3 e ', (done) => {
        const resultado = multiplicaNumeros(3, );
        expect(resultado).be.equal(undefined);
        done();
    })
})
