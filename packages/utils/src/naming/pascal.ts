import camelCase from 'lodash.camelcase';
import startCase from 'lodash.startcase';

/**
 * Converts any string of text to it's pascal case representation
 * [PascalCase]{@link https://techterms.com/definition/pascalcase}
 * @param name - Any string of text
 *
 * @returns A pascal representation of your input
 */
export function pascalCase(name: string) {
  return startCase(camelCase(name)).replace(/\s/g, '');
}

/**
 * Splits PascalCase names into their individual names
 *
 * @param name - A name that is represented in PascalCase
 * @param separator - A name that is represented in PascalCase
 * @returns
 */
export function splitPascalCase(name: string, separator = ' ') {
  return name
    .replace(/([A-Z][a-z])/g, ' $1')
    .replace(/(\d)/g, ' $1')
    .trim()
    .replace(/\s/g, separator);
}
