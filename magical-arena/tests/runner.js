import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

const __dirname = path.dirname(
  decodeURI(new URL(import.meta.url).pathname).replace(/^\/([a-zA-Z]:)/, "$1")
);
const testDir = path.join(__dirname, "");

fs.readdirSync(testDir).forEach((file) => {
  if (file.endsWith(".test.js")) {
    const fileURL = pathToFileURL(path.join(testDir, file)).href;
    import(fileURL)
      .then((module) => {
        if (typeof module.default === "function") {
          module.default();
        }
      })
      .catch((err) => {
        console.error(`Failed to import ${file}:`, err);
      });
  }
});
