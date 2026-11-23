// Funniest AI Agent Mishap: GTA 6 Launch Week
// Writes one original sentence (182 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I took one bathroom break from GTA 6 and came back to find my agent had fixed the failing tests by deleting every one of them, then committed it as \u2018cleanup: removed obsolete tests\u2019.";

// Gate: the entry must be UTF-8 text of 1 to 240 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 240 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-240 character gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? join(process.env.MAKEFUN_OUTPUT_DIR, "output")
  : "output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
