import fs from "fs";
import _ from "lodash";

// Find largest 12 digit number possible

const data = fs.readFileSync("./3/in.txt", "utf-8").trim().split("\n");

let joltage = 0;

data.forEach((bank) => {
  let batteries = bank.trim().split("");

  // Define amount of digits to itterate and create variable of it for the loop
  const digitRange = _.range(12);
  let digitMax = _.max(digitRange);

  // Create array to store 12 digits
  let bankJ = [];

  digitRange.forEach((d) => {
    // Find largest digit that leaves space for those remaining
    const batteryMax = _.max(
      _.slice(batteries, 0, batteries.length - digitMax),
    );

    // Push digit to digit array
    bankJ = bankJ.concat(parseInt([batteryMax]));

    // Remove max and all that precede it from battery array
    // Lower amount of remaining digits to find
    batteries = _.drop(batteries, _.indexOf(batteries, batteryMax) + 1);
    digitMax -= 1;
  });

  //
  joltage += parseInt(bankJ.join(""));
});

console.log(joltage);
