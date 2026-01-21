import _ from "lodash";
import fs from "fs";

// Determine how many rolls of paper (@) can be removed by forklift from the input
// A forklift can only take a roll if it is surrounded in 3 or less rolls

const grid = fs.readFileSync("./4/in.txt", "utf-8").trim().split("\n");

let count = 0;

// Define directions from character
const directions = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [-1, 0],
  [1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
];

// Return character in grid if it remains in grid bounds
const gridBoundaries = (grid, x, y) => {
  if (x < 0 || x > grid[0].length || y < 0 || y >= grid.length) return "";
  return grid[y][x];
};

// Iterate through each row, then each character of a row
for (let y = 0; y < grid.length; y++) {
  for (let x = 0; x < grid[y].length; x++) {
    if (grid[y][x] == "@") {
      // Count of rolls adjacent
      let aCount = 0;

      // Iterrate through all directions and add to aCount where applicable
      directions.forEach((d) => {
        const yMove = y + d[0];
        const xMove = x + d[1];

        const chara = gridBoundaries(grid, xMove, yMove);

        if (chara == "@") {
          aCount += 1;
        }
      });

      // Add to count of rolls removed if 3 or less rolls
      if (aCount > 3) continue;

      count += 1;
    }
  }
}

console.log(count);
