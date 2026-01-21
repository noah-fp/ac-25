import _ from "lodash";
import fs from "fs";

// Conditionally add or multiply each column
// Add all products together

const data = fs.readFileSync("6/ex.txt", "utf-8").trim().split("\n");

// Create an array out of each line of data
// Use compact method to remove any additional spaces
const lines = data.map((d) => _.compact(d.trim().split(" ")));

// Define sign and value arrays
const signs = lines[lines.length - 1];
const ints = lines.slice(0, -1);

const result = signs.reduce((total, sign, i) => {
  // Build an array from the integers at the array index matching the loop index
  const values = ints.map((line) => Number(line[i]));

  // Conditionally add or multiply based on the sign and add the result to cumilative total
  return total + (sign == "+" ? _.sum(values) : values.reduce((a, b) => a * b));
}, 0);

console.log(result);
