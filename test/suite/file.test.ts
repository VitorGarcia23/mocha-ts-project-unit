import { soma } from '../../src/file';
import { expect } from 'chai';

describe('Soma function', () => {
  it('deve retornar 4', () => {
    const result: number = soma(2, 2);
    expect(result).to.be.eq(4, 'O resultado da soma de 2 +2 deve ser 4');
  });

  it('deve retornar 4', () => {
    const result: number = 5;
    expect(result).to.be.eq(4, 'O resultado da soma de 2 +2 deve ser 4');
  });
});
