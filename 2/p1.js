import fs from "fs";
import _ from "lodash";

// Determine how many IDs in ranges provided are made of a sequence of digits repeated twice

const data = fs.readFileSync("./2/in.txt", "utf-8").trim().split(",");

let count = 0;

data.forEach((line) => {
  // Create array of numbers in the range
  const pair = line.split("-");
  const r = _.range(pair[0], parseInt(pair[1]) + 1);

  r.forEach((n) => {
    // Create ID string for mutation and define if ID length is divisable by 2
    const id = String(n);
    const h = id.length / 2;

    // If ID length is not odd and the first half is the same as the second, add to count
    if (h % 1 != 0.5 && id.slice(0, h) == id.slice(-h)) {
      count += n;
    }
  });
});

console.log(count);
