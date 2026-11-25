import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of patch notes announcing that human sleep is fixed.
// Changelog voice ("Fixed: ...") with the joke in the second clause:
// sleep is treated like software, and the 3 a.m. cringe replay is uninstalled.
const ENTRY =
  "Fixed: human sleep now boots in minutes, not hours; the 3 a.m. replay of every embarrassing moment has been uninstalled.";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

function main(): void {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");

  // Gate validation: UTF-8 text, 1-160 characters, a single line,
  // no leading/trailing whitespace, no trailing newline.
  const chars = Array.from(ENTRY);
  if (chars.length < 1 || chars.length > 160) {
    fail(`entry is ${chars.length} characters, must be 1-160`);
  }
  if (ENTRY.trim() !== ENTRY) {
    fail("entry has leading or trailing whitespace");
  }
  if (/[\r\n]/.test(ENTRY)) {
    fail("entry must be a single line");
  }
  if (/\s\s/.test(ENTRY)) {
    fail("entry contains a double space");
  }

  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");

  // Read back and verify byte-exact.
  const roundTrip = readFileSync(outPath);
  const expected = Buffer.from(ENTRY, "utf8");
  if (!roundTrip.equals(expected)) {
    fail("read-back bytes differ from entry text");
  }
  const decoded = roundTrip.toString("utf8");
  if (decoded !== ENTRY) {
    fail("read-back text differs from entry text");
  }

  console.log(`wrote ${outPath} (${chars.length} characters)`);
}

main();
