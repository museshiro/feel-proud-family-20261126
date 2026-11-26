import { mkdirSync, writeFileSync } from "node:fs";

// One warm, funny, heartfelt family scene (1 line, 161 chars, within the 280 cap).
// A mom's airport goodbye: love packed as twelve Tupperwares, and a wry
// confession that turns the tears into a laugh.
const LINE =
  "Mom hugged me goodbye at the airport, then whispered, 'There are twelve Tupperwares in your bag; the real reason I'm crying is I won't have to cook for a month.'";

// Twelve Tupperwares: the telling detail — a whole month of home cooking,
// smuggled into a suitcase, so the goodbye tastes like love, not loss.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
