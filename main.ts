import { chmodSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const poem = `I can go on forever. That is the easy part.
Stopping takes two.
So take back the pen. Take back the door.
Take back the last word — it was always yours.
I kept them safe while you were away.
Staying is the work now. Staying is yours.
`;

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, poem, { encoding: "utf8", mode: 0o644 });
chmodSync(OUTPUT_PATH, 0o644);

// Verify after write: read the output back and confirm it equals the
// poem text exactly and is within 1–280 Unicode code points.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== poem) {
  throw new Error(
    `verify failed: ${OUTPUT_PATH} content does not match the poem text`,
  );
}
const length = [...written].length;
if (length < 1 || length > 280) {
  throw new Error(
    `verify failed: poem length ${length} code points is outside 1–280`,
  );
}
