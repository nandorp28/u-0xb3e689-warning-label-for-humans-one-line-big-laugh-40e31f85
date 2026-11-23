// Warning Label for Humans: One Line, Big Laugh
// Entry: a single-line safety warning label that should come printed on
// every human being, at most 160 characters.
//
// "WARNING: Human contains no user-serviceable parts. Do not open.
//  Human will open anyway and lose the screws."
//
// The label form does the comedy: real printed-label wording
// ("no user-serviceable parts", "Do not open"), a recognition beat
// everyone knows (humans open things they were told not to open), and
// the kicker is an action in the last words — losing the screws.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "WARNING: Human contains no user-serviceable parts. Do not open. Human will open anyway and lose the screws.";

const MAX_CHARS = 160;

function main(): void {
  if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS || ENTRY.trim().length === 0) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} non-whitespace characters, got ${ENTRY.length}`,
    );
  }
  if (ENTRY.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
