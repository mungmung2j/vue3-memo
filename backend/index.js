const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

const memos = [];

app.use(bodyParser.json());

app.get("/api/memos", (req, res) => {
  res.send(memos);
});

app.post("/api/memos", (req, res) => {
  //console.log(req.body);
  //memos[req.body.idx] = req.body.content;
  memos.push(req.body.content);
  res.send(memos);
});

app.put("/api/memos/:idx", (req, res) => {
  memos[req.parms.idx] = req.body.content;
  res.send(memos);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use(express.urlencoded({ extended: true }));
