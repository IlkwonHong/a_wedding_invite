import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const repo = "a_wedding_invite";
const outDir = path.join(__dirname, "out");

// /a_wedding_invite 아래로 정적 서빙
app.use(`/${repo}`, express.static(outDir, { extensions: ["html"] }));

// (선택) / 접속하면 /a_wedding_invite로 보내기
app.get("/", (_, res) => res.redirect(`/${repo}/`));

app.listen(4173, () => {
  console.log(`Open http://localhost:4173/${repo}/`);
});
