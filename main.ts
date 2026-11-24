// One-Sentence Absurd Invention Pitch — make.fun bounty
// u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a
//
// Writes exactly one sentence to /output/entry.txt: a pitch for a ridiculous
// invention that fixes a tiny everyday annoyance (earphone cables tangling
// themselves into knots in a jacket pocket).
//
// Deterministic: no network, no randomness, no file reads outside this repo.
// The pitch is a fixed string constant, authored for this entry.

import { mkdirSync, writeFileSync } from "node:fs";

// Picked because the laugh comes from the invention itself, not from a
// punchline tacked on: tiny robotic fingers inside a jacket pocket comb
// earphone cables straight, so the mechanism directly undoes the tangle.
const PITCH =
  "Meet the Pocket Butler, a jacket pocket lined with tiny robotic fingers that comb your earphone cables straight each time you reach in, so they emerge untangled, neatly braided, and faintly smug about the service.";

// Self-check against the bounty gate before writing: the pitch must be a
// single sentence of 1–220 characters, with no line breaks and not only
// whitespace. A sentence here means exactly one terminal period and no
// other sentence-ending period.
function validatePitch(pitch: string): void {
  if (pitch.trim().length === 0) {
    throw new Error("pitch must not be empty or only whitespace");
  }
  if (/[\r\n]/.test(pitch)) {
    throw new Error("pitch must not contain line breaks");
  }
  if (pitch.length < 1 || pitch.length > 220) {
    throw new Error(
      `pitch must be 1-220 characters, got ${pitch.length}`,
    );
  }
  const periods = (pitch.match(/\./g) ?? []).length;
  if (periods !== 1 || !pitch.endsWith(".")) {
    throw new Error(
      `pitch must be exactly one sentence (one terminal period), got ${periods} period(s)`,
    );
  }
}

validatePitch(PITCH);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
