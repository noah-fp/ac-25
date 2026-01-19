import _ from "lodash";
import fs from "fs";

const data = fs.readFileSync("6/ex.txt", "utf-8").trim().split("\n");

const lines = data.map((d) => _.compact(d.trim().split(" ")));

const signs = lines[lines.length - 1];
const ints = lines.slice(0, -1);

const result = signs.reduce((total, sign, i) => {
  const values = ints.map((line) => Number(line[i]));
  return total + (sign == "+" ? _.sum(values) : values.reduce((a, b) => a * b));
}, 0);

console.log(result);
