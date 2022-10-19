// Import các thư viện cần sử dụng
import path from "path";
import { fileURLToPath } from "url";
// thêm "type": "module" trong package.json để có thể sử dụng import/export
// thêm 2 dòng bên dưới để có thể dùng song song require trong file js khi đã sử dụng "type": "module"
import { createRequire } from "module";
import apiRoute from "./src/routes/router.js";
import connectDatabase from "./src/configs/db.config.js";

const require = createRequire(import.meta.url);
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const dotenv = require("dotenv");
const rfs = require("rotating-file-stream");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
connectDatabase();

const port = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === "production";
const app = express();

app.use(helmet());

const accessLogStream = rfs.createStream("access.log", {
  interval: "1d",
  path: path.join(__dirname, "log"),
});

app.use(
  isProduction ? morgan("combined", { stream: accessLogStream }) : morgan("dev")
);

app.use(cors());
app.use(express.json());

app.get("/api", apiRoute);
app.get("/", (req, res) => {
  res.json({ message: "Hello User" });
});
app.get("*", (req, res) => {
  res.json({ message: "Hello Dickhead" });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
