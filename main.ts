import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I'm out of office until Monday. This auto-reply is now handling all my emails — honestly, it's doing a better job than I ever did.";

if (line.length < 1 || line.length > 140) {
  throw new Error(`entry must be 1-140 chars, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
