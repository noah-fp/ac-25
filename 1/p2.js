import fs from "fs";

// Determine how many times 0 is crossed

const data = fs.readFileSync("./1/in.txt", "utf-8").trim().split("\n");

let dn = 50;
let count = 0;

data.forEach((line) => {
  let dir = line.includes("L") ? -1 : 1;

  let instr = parseInt(line.slice(1)) * dir;

  // Divide absolute value of movement by 100 and remove remainder
  // Add to count
  count += Math.floor(Math.abs(instr / 100));

  // Add the remainder to dial number
  dn += instr % 100;

  // If outside the 0-99 range, bring back and add to count
  if (dn < 0) {
    dn += 100;
    count++;
  } else if (dn >= 100) {
    dn -= 100;
    count++;
  }
});

console.log(count);
