import * as readline from "readline-sync";

const scripts = [
  {
    name: "Convert length",
    script: "./length",
  },
  {
    name: "Convert mass",
    script: "./mass",
  },
  {
    name: "Convert capacity",
    script: "./capacity",
  },
  {
    name: "Convert area",
    script: "./area",
  },
  {
    name: "Convert volume",
    script: "./volume",
  },
];

const script = readline.keyInSelect(
  scripts.map((script) => script.name),
  "Choose a script to run: "
);

if (script === -1) {
  console.log("No script selected, exiting.");
  process.exit(0);
}

require(scripts[script].script);
