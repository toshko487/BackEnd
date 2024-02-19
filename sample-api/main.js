const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.get("/article/create", (req, res) => {
  const { title, desc } = req.query;

  const data = fs.readFileSync("articles.json", "utf8");
  const list = JSON.parse(data);

  list.push({
    title: title,
    decs: desc,
  });

  fs.writeFileSync("articles.json", JSON.stringify(list));
  res.send("succes");
});

app.get("/article/read", (req, res) => {
  const data = fs.readFileSync("articles.json", "utf8");
  res.json(JSON.parse(data));
});

app.get("/article/update", (req, res) => {
  res.send({ name: "hello world" });
});

app.get("/article/delete", (req, res) => {
  res.send({ name: "hello world" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
