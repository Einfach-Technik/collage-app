// Kopiert die Web-App nach www/, damit Capacitor sie in die iOS-App einbinden kann.
import { cpSync, rmSync, mkdirSync } from "node:fs";

const files = ["index.html", "manifest.webmanifest", "sw.js", "privacy.html", "icons"];
rmSync("www", { recursive: true, force: true });
mkdirSync("www");
for (const f of files) cpSync(f, `www/${f}`, { recursive: true });
console.log("www/ aktualisiert:", files.join(", "));
