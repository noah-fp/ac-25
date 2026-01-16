import _ from "lodash";
import fs from "fs";

const data = fs.readFileSync("./5/in.txt", "utf-8").trim().split("\n");

const boundaries = _.slice(data, 0, _.indexOf(data, "\r"));
const ranges = boundaries
  .map((r) => r.split("-").map((s) => Number(s)))
  .sort((a, b) => a[0] - b[0]);

let freshIds = 0;

let mergedRanges = [];
let mRange = [];

let bBreak = false;

for (let i = 0; i < ranges.length - 1; i++) {
  const last = i == ranges.length - 2;

  const r1 = bBreak ? mRange : ranges[i];
  const s1 = r1[0];
  const e1 = r1[1];

  const r2 = ranges[i + 1];
  const s2 = r2[0];
  const e2 = r2[1];

  bBreak = e1 >= s2 - 1;

  if (!bBreak) {
    mergedRanges.push(r1);
    if (last) {
      mergedRanges.push(r2);
    }
  } else {
    mRange = [s1, Math.max(e1, e2)];
    if (last) {
      mergedRanges.push(mRange);
    }
  }
}
mergedRanges.forEach((r) => {
  const ids = r[1] - r[0] + 1;
  freshIds += ids;
});

console.log(freshIds, "ingredient IDs are fresh");
