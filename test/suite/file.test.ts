import { soma } from '../../src/file';
import { expect } from 'chai';

describe('Soma function', () => {
    it('deve retornar 4', () => {
        const result = soma(2, 2);
        expect(result).to.be.eq(4, 'O resultado da soma de 2 +2 deve ser 4');
    });
});