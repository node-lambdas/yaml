import { lambda, Format } from "node-lambdas";
import YAML from "yaml";

lambda(
  { readBody: true, input: Format.Json, output: Format.Text },
  (input, output) => output.send(YAML.stringify(input.body))
);
