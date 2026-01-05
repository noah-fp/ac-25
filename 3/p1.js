import fs from "fs";
import _ from "lodash";

const data = fs.readFileSync("./3/in.txt", "utf-8").trim().split("\n");

let joltage = 0;

data.forEach((bank) => {
  let batteries = bank.trim().split("");

  const max = _.max(_.slice(batteries, 0, batteries.length - 1));
  const maxIndex = _.indexOf(batteries, max);

  _.pullAt(batteries, maxIndex);
  const max2 = _.max(_.slice(batteries, maxIndex, batteries.length));

  const bankJ = parseInt([max, max2].join(""));

  joltage += bankJ;
});

console.log(joltage);
