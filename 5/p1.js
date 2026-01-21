import _ from "lodash";
import fs from "fs";

// Determine which IDs fall into any of the ranges of the input

const data = fs.readFileSync("./5/in.txt", "utf-8").trim().split("\n");

// Split the input ranges and ingridients
const breakIndex = _.indexOf(data, "\r");
const ranges = _.slice(data, 0, breakIndex);
const ingredients = _.slice(data, breakIndex + 1, data.length);

let fresh = [];

// Iterate through each range on each ingidient
ingredients.forEach((i) => {
  ranges.forEach((r) => {
    // Create array of first and last ID in range
    r = r.split("-");

    // Push ingrident ID to array if it is within the range
    if (_.inRange(i, Number(r[0]), Number(r[1]) + 1)) {
      fresh.push(i);
    }
  });
});

// Amount of unique IDs to account for range overlap
console.log(_.uniq(fresh).length, "ingredients are fresh");
