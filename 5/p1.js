import _ from "lodash";
import fs from "fs";

const data = fs.readFileSync("./5/in.txt", "utf-8").trim().split("\n");

const breakIndex = _.indexOf(data, "\r");
const ranges = _.slice(data, 0, breakIndex);
const ingredients = _.slice(data, breakIndex + 1, data.length);

let fresh = [];

ingredients.forEach((i) => {
  ranges.forEach((r) => {
    r = r.split("-");

    if (_.inRange(i, Number(r[0]), Number(r[1]) + 1)) {
      fresh.push(i);
    }
  });
});

console.log(_.uniq(fresh).length, "ingredients are fresh");
