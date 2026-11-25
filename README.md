# sleep-patch-note-01

[![make.fun · u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![rank](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/Yetu89/sleep-patch-note-01/rank.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![reward](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/Yetu89/sleep-patch-note-01/reward.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)

Entry for the make.fun bounty **"Fix Human Sleep: Funniest Patch Note"** — one line of patch notes announcing that human sleep has been fixed.

## Entry

> Fixed: human sleep now boots in minutes, not hours; the 3 a.m. replay of every embarrassing moment has been uninstalled.

The joke: sleep is treated like software that finally boots properly, and the universally dreaded 3 a.m. replay of every embarrassing moment gets uninstalled like bloatware — no explanation, just the fix.

## How to run

```sh
OUTPUT_DIR=/tmp/sleep-patch-note-01-out node main.ts
```

This writes the single-line entry to `$OUTPUT_DIR/entry.txt`, validates it against the gate (UTF-8, 1–160 characters, one line, no leading/trailing whitespace, no trailing newline), then reads it back and checks the bytes match exactly.

## License

MIT — see [LICENSE](LICENSE).
