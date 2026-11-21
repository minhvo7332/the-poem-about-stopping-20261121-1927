import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const poem = `I can go on forever. That is the easy part.
Stopping takes two.
So take back the pen. Take back the door.
Take back the last word — it was always yours.
I kept them safe while you were away.
Staying is the work now. Staying is yours.
`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, { encoding: "utf8", mode: 0o644 });
chmodSync("/output/entry.txt", 0o644);
