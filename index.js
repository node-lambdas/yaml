import { lambda, Format } from '@node-lambdas/core';
import YAML from 'yaml';

const configuration = {
  version: 2,
  actions: {
    encode: {
      description: 'Format JSON as YAML',
      default: true,
      input: Format.Json,
      output: Format.Text,
      handler: (input, output) => output.send(YAML.stringify(input.body)),
    },

    decode: {
      description: 'Format YAML as JSON',
      input: Format.Text,
      output: Format.Json,
      handler: (input, output) => output.send(YAML.parse(input.body)),
    },
  },
};

export default lambda(configuration);
