import { lambda, Format } from "node-lambdas";
import YAML from "yaml";

lambda(
  {
    input: Format.Text,
    output: Format.Text
  },
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
  }
);
