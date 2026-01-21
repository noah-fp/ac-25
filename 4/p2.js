import _ from "lodash";
import fs from "fs";

// Iterate the removal of the rolls until no more can be

const data = fs.readFileSync("./4/in.txt", "utf-8").trim().split("\n");

let grid = data.map((r) => _.toArray(r.trim()));

let count = 0;
let lastCount = 0;

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

const gridBoundaries = (grid, x, y) => {
  if (x < 0 || x > grid[0].length || y < 0 || y >= grid.length) return "";
  return grid[y][x];
};

while (true) {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] == "@") {
        let aCount = 0;

        directions.forEach((d) => {
          const yMove = y + d[0];
          const xMove = x + d[1];

          const chara = gridBoundaries(grid, xMove, yMove);

          if (chara == "@") {
            aCount += 1;
          }
        });

        if (aCount > 3) continue;

        // Replace a removed roll with 'x'
        grid[y][x] = "x";
        count += 1;
      }
    }
  }
  // Break when count does not change
  if (lastCount == count) break;

  lastCount = count;
}

console.log(count);
