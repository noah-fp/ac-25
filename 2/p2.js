import fs from "fs";
import _ from "lodash";

const data = fs.readFileSync("./2/in.txt", "utf-8").trim().split(",");

let count = 0;

data.forEach((line) => {
  const pair = line.split("-");
  const r = _.range(pair[0], parseInt(pair[1]) + 1);

  r.forEach((n) => {
    const id = String(n);
    const l = id.length;

    for (let i = 2; i <= l; i++) {
      if (l % i == 0) {
        const p = l / i;
        // i = 2 | 3 | 6 -- id partition lengths
        // p = 3 | 2 | 1 -- id partition amounts

        const parts = _.chunk(id.split(""), p).map((n) => n.join(""));

        if (_.uniq(parts).length == 1) {
          count += n;
          break;
        }
      }
    }
  });
});

console.log(count);
