import _ from "lodash";
import fs from "fs";

// Treat all numbers vertically

const data = fs.readFileSync("6/in.txt", "utf-8").split("\n");

const signArray = data[data.length - 1].split("");
const intArray = data.slice(0, -1);

const result = signArray.reduce((total, sign, i) => {
  // Skip iteration when no operator
  if (sign == " ") {
    return total;
  }

  // Build array of vertical values
  const values = [];
  for (let p = 0; p < 4; p++) {
    // Build array of digits relative to the operator index
    const column = intArray.map((line) => line[i + p] || " ");

    // End loop if every digit is a blank
    if (column.every((c) => c == " ")) {
      break;
    }

    values.push(Number(column.join("").trim()));
  }

  return total + (sign == "+" ? _.sum(values) : values.reduce((a, b) => a * b));
}, 0);

console.log(result);
