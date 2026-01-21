import _ from "lodash";
import fs from "fs";

// Find all valid IDs in ranges

// I cannot turn each range into an array and find its length (numbers in input far too large)
// Instead, I will sort all ranges, then merge any that overlap
// I will then

const data = fs.readFileSync("./5/in.txt", "utf-8").trim().split("\n");

// Sort ranges by first number of the range
// Map to reformat as integers
const boundaries = _.slice(data, 0, _.indexOf(data, "\r"));
const ranges = boundaries
  .map((r) => r.split("-").map((s) => Number(s)))
  .sort((a, b) => a[0] - b[0]);

let freshIds = 0;

// Define an overall array of all ranges (mergedRanges) and a holding array to be pushed (mRange)
let mergedRanges = [];
let mRange = [];

// Boundary break - boolean flag for in-loop logic
let bBreak = false;

for (let i = 0; i < ranges.length - 1; i++) {
  // Boolean flag to push to array when it is the final loop
  const last = i == ranges.length - 2;

  // Define start and end of the current range
  // If the flag is active, use the range from the holding array as it will always have a larger end
  const r1 = bBreak ? mRange : ranges[i];
  const s1 = r1[0];
  const e1 = r1[1];

  // Define start and end of the next range
  const r2 = ranges[i + 1];
  const s2 = r2[0];
  const e2 = r2[1];

  // If the end of the current range is larger than the start of the next, flag it
  bBreak = e1 >= s2 - 1;

  // If it is the last itteration, conditionally push either the next or the merged range to the array
  if (!bBreak) {
    // If boundary was not broken, add the current range to the array
    mergedRanges.push(r1);
    if (last) {
      mergedRanges.push(r2);
    }
  } else {
    // If the flag is active, add the larger range to the holding array
    mRange = [s1, Math.max(e1, e2)];
    if (last) {
      mergedRanges.push(mRange);
    }
  }
}

// For each range in the array, find the span and add to ID total
mergedRanges.forEach((r) => {
  const ids = r[1] - r[0] + 1;
  freshIds += ids;
});

console.log(freshIds, "ingredient IDs are fresh");
