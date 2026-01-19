import _ from "lodash";
import fs from "fs";

const data = fs.readFileSync("6/in.txt", "utf-8").split("\n");

const signArray = data[data.length - 1].split("");
const intArray = data.slice(0, -1);

const result = signArray.reduce((total, sign, i) => {
  if (sign == " ") {
    return total;
  }
  const values = [];
  for (let p = 0; p < 4; p++) {
    const column = intArray.map((line) => line[i + p] || " ");

    if (column.every((c) => c == " ")) {
      break;
    }

    values.push(Number(column.join("").trim()));
  }

  return total + (sign == "+" ? _.sum(values) : values.reduce((a, b) => a * b));
}, 0);

console.log(result);
