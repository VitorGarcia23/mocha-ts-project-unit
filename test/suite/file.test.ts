import { sum } from '../../src/file';
import { expect } from 'chai';

suite('Sum function', () => {
  test('should return 4 success', () => {
    const result: number = sum(2, 2);
    expect(result).to.be.eq(4, 'The result of 2 + 2 should be 4');
  });

  test('deve retornar 4 error', () => {
    const result: number = 5;
    expect(result).to.be.eq(4, 'The result of 2 + 2 should be 4');
  });
});
