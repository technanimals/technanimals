import { pascalCase, splitPascalCase } from 'naming/pascal';

describe('Pascal', () => {
  describe('.pascalCase()', () => {
    it('Should convert snake case name', () => {
      const name = pascalCase('pascal_case');
      expect(name).toBe('PascalCase');
    });
  });

  describe('.splitPascalCase()', () => {
    it('Should separate input into two words', () => {
      const name = splitPascalCase('SnakeCase');
      expect(name).toBe('Snake Case');
    });
  });
});
