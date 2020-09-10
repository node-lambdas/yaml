import { lambda, Format } from '@node-lambdas/core';
import YAML from 'yaml';

const configuration = {
  version: 2,
  actions: {
    encode: {
      description: 'Convert JSON to YAML',
      default: true,
      input: Format.Json,
      output: Format.Text,
      handler: (input, output) => output.send(YAML.stringify(input.body)),
    },

    decode: {
      description: 'Convert YAML to JSON',
      input: Format.Text,
      output: Format.Json,
      handler: (input, output) => output.send(YAML.parse(input.body)),
    },
  },
};

export default lambda(configuration);
