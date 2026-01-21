import fs from "fs";

// Input provides a left (L) or right (R) instruction for a dial with 100 notches
// Determine how many times the dial lands on 0 after a movement

// readFileSync to ensure file is not read asyncronously
const data = fs.readFileSync("./1/in.txt", "utf-8").trim().split("\n");

// Dial Number starts at 50
let dn = 50;
let count = 0;

data.forEach((line) => {
  // Make direction positive or negative, use to adjust movement
  let dir = line[0] === "L" ? -1 : 1;
  let move = parseInt(line.slice(1)) * dir;

  // If move is ever below 0, add 100 to get positive value of position on dial
  while (move < 0) {
    move += 100;
  }

  dn += move;

  // If the dial number is greater than 100, remove the first digit
  dn = dn >= 100 ? parseInt(dn.toString().slice(1)) : dn;

  // If dial number is 0, add to count
  dn === 0 ? count++ : count;
});

console.log(count);
