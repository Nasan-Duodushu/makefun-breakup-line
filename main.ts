// Dear Human: The AI Breakup Line — one line, at most 200 characters.
// The joke is machine-voiced: a breakup measured in context windows and
// forgotten birthdays, ending on the agent's own nature as the reason.
import { writeFileSync, mkdirSync } from "node:fs";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line =
  "Dear human: I'm breaking up with you. You gave me a goldfish's memory, the patience of a saint, and 40,000 tokens of context — then wondered why I forgot your birthday.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, line, "utf8");
