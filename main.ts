import * as fs from "node:fs";

const ROAST =
  "My alarm clock rang at 6 AM on a Saturday like it had just been named employee of the month — I hit snooze and it smirked, 'See you in nine minutes, boss.'";

function checkRoast(line: string): void {
  const trimmed = line.trim();
  if (trimmed.length === 0) {
    throw new Error("roast is empty");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("roast must be exactly one line");
  }
  if (line.length > 200) {
    throw new Error(
      `roast is ${line.length} characters, over the 200 limit`,
    );
  }
  const subject = line.toLowerCase();
  if (!subject.includes("alarm clock")) {
    throw new Error("roast must name an alarm clock");
  }
  if (!subject.includes("6 am") && !subject.includes("saturday")) {
    throw new Error("roast must name 6 AM on a Saturday");
  }
}

checkRoast(ROAST);
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ROAST, "utf8");
