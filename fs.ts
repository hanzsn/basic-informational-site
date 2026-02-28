import { writeFile } from "fs/promises";

let content: string = "";

(async () => {
  try {
    await writeFile("src/index.ts", content, "utf-8");
    console.log("File written!");
  } catch (err) {
    console.error(err);
  }
})();
