import fs from "fs";
import _ from "lodash";

// Find largest 2 digit number in a 'bank', ensuring a bank's numbers do not change order
// Add largest numbers to eachother

const data = fs.readFileSync("./3/in.txt", "utf-8").trim().split("\n");

let joltage = 0;

data.forEach((bank) => {
  // Create array of all numbers in bank
  let batteries = bank.trim().split("");

  // Find the largest number that is not the last digit, define its index
  const max = _.max(_.slice(batteries, 0, batteries.length - 1));
  const maxIndex = _.indexOf(batteries, max);

  // Remove max number and determine second largest digit in remaining digits to the right
  _.pullAt(batteries, maxIndex);
  const max2 = _.max(_.slice(batteries, maxIndex, batteries.length));

  // Parse and add to total
  const bankJ = parseInt([max, max2].join(""));
  joltage += bankJ;
});

console.log(joltage);
