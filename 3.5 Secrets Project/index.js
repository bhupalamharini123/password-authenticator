import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// middleware
function passwordCheck(req, res, next) {
  const password = req.body.password;

  if (password === process.env.PASSWORD) {
    next(); // allow access
  } else {
    res.sendFile(__dirname + "/public/index.html"); // deny access
  }
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// apply middleware only to this route
app.post("/check", passwordCheck, (req, res) => {
  res.sendFile(__dirname + "/public/secret.html");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
