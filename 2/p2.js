import fs from "fs";
import _ from "lodash";

// Determine how many IDs contain any repeating sequence of digits

const data = fs.readFileSync("./2/in.txt", "utf-8").trim().split(",");

let count = 0;

data.forEach((line) => {
  const pair = line.split("-");
  const r = _.range(pair[0], parseInt(pair[1]) + 1);

  r.forEach((n) => {
    // Create ID string for mutation and define ID length
    const id = String(n);
    const l = id.length;

    // Loop through each partition length (i)
    for (let i = 2; i <= l; i++) {
      // If there is no remainder, check length
      if (l % i == 0) {
        const p = l / i;
        // l = 6 | 6 | 6 -- id length
        // i = 2 | 3 | 6 -- id partition lengths
        // p = 3 | 2 | 1 -- id partition amounts

        // Create nested array of partitions
        const parts = _.chunk(id.split(""), p).map((n) => n.join(""));

        // Check if partitions are all the same
        // If true, add to count and stop checking other partition lengths
        if (_.uniq(parts).length == 1) {
          count += n;
          break;
        }
      }
    }
  });
});

console.log(count);
