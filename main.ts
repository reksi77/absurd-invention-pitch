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

const PITCH =
  "Meet the Pocket Butler, a jacket pocket lined with tiny robotic fingers that comb your earphone cables straight each time you reach in, so they emerge untangled, neatly braided, and faintly smug about the service.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
