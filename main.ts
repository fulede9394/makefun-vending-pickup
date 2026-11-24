import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Vending machine pickup line: it always delivers, unlike the ex.
const LINE =
  "Hey, beautiful. I've been holding this chocolate bar just for you — and unlike your ex, I always deliver.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
