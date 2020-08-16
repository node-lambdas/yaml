import { lambda, Format } from '@node-lambdas/core';
import YAML from 'yaml';

const configuration = {
  version: 1,
  input: Format.Text,
  output: Format.Text,
};

lambda(
  configuration,
  (input, output) => {
    switch (input.url) {
      case '/':
      case '/encode':
        return output.send(YAML.stringify(JSON.parse(input.body)));

      case '/decode':
        return output.send(YAML.parse(input.body));

      default:
        output.reject('Invalid action. Must be either encode or decode');
    }
  },
);
