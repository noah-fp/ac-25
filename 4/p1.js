import _ from "lodash";
import fs from "fs";

const grid = fs.readFileSync("./4/in.txt", "utf-8").trim().split("\n");

let count = 0;

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

      count += 1;
    }
  }
}

console.log(count);
