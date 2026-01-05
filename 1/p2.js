import fs from "fs";

const data = fs.readFileSync("./1/in.txt", "utf-8").trim().split("\n");

let dn = 50;
let count = 0;

data.forEach((line) => {
  let dir = line.includes("L") ? -1 : 1;

  let instr = parseInt(line.slice(1)) * dir;

  count += Math.floor(Math.abs(instr / 100));

  dn += instr % 100;

  if (dn < 0) {
    dn += 100;
    count++;
  } else if (dn >= 100) {
    dn -= 100;
    count++;
  }
});

console.log(count);
