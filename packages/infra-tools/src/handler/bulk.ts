import { FunctionProps, Stack, Function as Handler } from '@serverless-stack/resources';
import { pascalCase } from '@technanimals/utils';
import fs from 'fs';
import path from 'path';

const INITIAL_RECORDS: LambdaRecords = {};
/**
 * Creates functions for all files in the provided directory
 *
 * @param input - Input needed to create the separate handler function
 *  *
 * @returns A record of the lambda functions with the keys as the PascalCase version of the filename
 */
export function createHandlersFromDirectory(input: CreateHandlersFromDirectoryInput) {
  const { appName, stack, directory, props = {} } = input;
  const { stage } = stack;
  const root = process.cwd();
  const dir = directory.replace(`${root}/`, '');
  const functions = fs.readdirSync(directory);

  return functions.reduce((memo, filename) => {
    const fullPath = path.resolve(directory, filename);
    const [name] = filename.split('.');
    const constructName = pascalCase(name);
    const functionName = [stage, appName, name].join('-');
    const id = `${constructName}Lambda`;
    const handler = `${dir}/${name}.handler`;
    const stats = fs.statSync(fullPath);
    if (stats.isDirectory()) {
      return memo;
    }
    const lambdaFunction = new Handler(stack, id, {
      handler,
      functionName,
      ...props,
    });

    return {
      ...memo,
      [constructName]: lambdaFunction,
    };
  }, INITIAL_RECORDS);
}

export type LambdaProps = Omit<Omit<FunctionProps, 'handler'>, 'functionName'>;
export type LambdaRecords = Record<string, Handler>;

export interface CreateHandlersFromDirectoryInput {
  /**
   * The name of the sst application
   */
  appName: string;
  /**
   * The stack in which the functions belong to
   */
  stack: Stack;
  /**
   * The directory where the functions should be created from
   */
  directory: string;
  /**
   * Common handler props that you need to pass down to your functions
   */
  props?: LambdaProps;
}
