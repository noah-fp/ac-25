import _ from "lodash";
import fs from "fs";

// Iterate 'beams' (|) down each line, splitting when they meet a '^'
// Determine how many times a beam splits

const data = fs.readFileSync("7/in.txt", "utf-8").trim().split("\n");
const lines = data.map((line) => line.split(""));

// Create array for beam positions, with holding arrays for in-line logic
// Set initial position in line with the start, "S"
let beamIndexes = [_.indexOf(lines[0], "S")];
let bHolding = [];
let rHolding = [];

let splitCount = 0;

// Start loop at second line
for (let i = 1; i < lines.length; i++) {
  // Loop through each existing beam position and determine if it splits
  beamIndexes.forEach((bI) => {
    if (lines[i][bI] == "." || lines[i][bI] == "|") {
      lines[i][bI] = "|";
    } else if (lines[i][bI] == "^") {
      // Split if ^
      lines[i][bI - 1] = "|";
      lines[i][bI + 1] = "|";

      // Add changes to holding arrays
      bHolding.push(bI - 1, bI + 1);
      rHolding.push(bI);

      splitCount += 1;
    } else console.error("Problem!");
  });

  // Amend beamIndex array and clear holding arrays
  beamIndexes = _.uniq(_.concat(beamIndexes, bHolding));
  _.pullAll(beamIndexes, rHolding);
  bHolding = [];
  rHolding = [];
}

console.log(lines.join("\n"), splitCount);
