import fs from "fs";
import _ from "lodash";

const data = fs.readFileSync("./3/in.txt", "utf-8").trim().split("\n");

let joltage = 0;

data.forEach((bank) => {
  let batteries = bank.trim().split("");

  const digitRange = _.range(12);
  let digitMax = _.max(digitRange);

  let bankJ = [];

  digitRange.forEach((d) => {
    const batteryMax = _.max(
      _.slice(batteries, 0, batteries.length - digitMax)
    );

    bankJ = bankJ.concat(parseInt([batteryMax]));

    batteries = _.drop(batteries, _.indexOf(batteries, batteryMax) + 1);
    digitMax -= 1;
  });

  joltage += parseInt(bankJ.join(""));
});

console.log(joltage);
