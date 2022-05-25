/* eslint-disable global-require */

/* eslint-disable import/no-dynamic-require */
import fs from 'fs';
import path from 'path';
import prettier from 'prettier';

const root = __dirname;
async function getResources() {
  const resourceDir = path.resolve(root, 'resources');
  const resources = fs.readdirSync(resourceDir);

  return Promise.all(
    resources.map(async (resource) => {
      const packagePath = path.resolve(resourceDir, resource, 'package.json');
      const resourcePackage = await require(packagePath);
      const packageName = resourcePackage.name;
      const [, paystackName] = resourcePackage.name.split('/') as string[];
      const name = paystackName.replace('paystack-', '');
      const importStatement = `import * as ${name} from '${packageName}';`;

      return {
        name,
        importStatement,
      };
    })
  );
}

async function build() {
  const resources = await getResources();
  const imports: string[] = [
    `import { ConfiguredClient, AuthService } from '@technanimals/paystack-client';`,
  ];
  const output = resources.map(({ importStatement, name }) => {
    imports.push(importStatement);

    return `
    ${name}: new ConfiguredClient(
      '${name}',
      ${name}.configuration,
      authService
    ).getClient<${name}.Client>(),
    `;
  }, '');

  const importData = imports.join('\n');

  const body = output.join('\n');

  const text = `
    ${importData}
    export function createPaystackClient(secret: string) {
      const authService = new AuthService(secret);
    
      return {
        ${body}
      };
    }
    
  `;

  const data = prettier.format(text, { parser: 'typescript', singleQuote: true });
  const outPath = path.resolve(root, 'index.ts');
  fs.writeFileSync(outPath, data);
}

build();
