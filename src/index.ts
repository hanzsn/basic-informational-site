import { createServer, IncomingMessage, ServerResponse } from "http";
import { readFile } from "fs/promises";
import { join } from "path";

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer(
  async (req: IncomingMessage, res: ServerResponse) => {
    let filePath: string;

    switch (req.url) {
      case "/":
        filePath = join(process.cwd(), "src/pages", "index.html");
        break;
      case "/about":
        filePath = join(process.cwd(), "src/pages", "about.html");
        break;
      case "/contact-me":
        filePath = join(process.cwd(), "src/pages", "contact-me.html");
        break;
      default:
        filePath = join(process.cwd(), "src/pages", "404.html");
        res.statusCode = 404;
        break;
    }

    try {
      const data = await readFile(filePath, "utf-8");
      if (res.statusCode !== 404) res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    } catch (error) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "text/plain");
      res.end("Internal Server Error");
      console.log(error);
    }
  },
);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
