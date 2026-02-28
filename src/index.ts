import express, { Request, Response } from "express";
import env from "dotenv";
import { join } from "path";

env.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const PAGES_DIR = join(process.cwd(), "src/pages");

const sendPage = (page: string, res: Response) => {
  res.sendFile(page, { root: PAGES_DIR }, (err) => {
    if (err) {
      res.status(500).send("Internal Server Error");
      console.error(err);
    }
  });
};

app.get("/", (req: Request, res: Response) => sendPage("index.html", res));
app.get("/about", (req: Request, res: Response) => sendPage("about.html", res));
app.get("/contact-me", (req: Request, res: Response) =>
  sendPage("contact-me.html", res),
);

app.use((req: Request, res: Response) => {
  res.status(404);
  sendPage("404.html", res);
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
