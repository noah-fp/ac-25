import fs from "fs";

// readFileSync to ensure file is not read asyncronously
const data = fs.readFileSync("./1/in.txt", "utf-8").trim().split("\n");

let dn = 50;
let count = 0;

data.forEach((line) => {
  let dir = line[0] === "L" ? -1 : 1;

  let move = parseInt(line.slice(1)) * dir;

  while (move < 0) {
    move += 100;
  }

  dn += move;

  dn = dn >= 100 ? parseInt(dn.toString().slice(1)) : dn;

  dn === 0 ? count++ : count;
});

console.log(count);
