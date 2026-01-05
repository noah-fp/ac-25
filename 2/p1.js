import fs from "fs";
import _ from "lodash";

const data = fs.readFileSync("./2/in.txt", "utf-8").trim().split(",");

let count = 0;

data.forEach((line) => {
  const pair = line.split("-");
  const r = _.range(pair[0], parseInt(pair[1]) + 1);

  r.forEach((n) => {
    const id = String(n);
    const h = id.length / 2;

    if (h % 1 != 0.5 && id.slice(0, h) == id.slice(-h)) {
      count += n;
    }
  });
});

console.log(count);
