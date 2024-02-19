const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.get("/article/create", (req, res) => {
  const content = [
    {
      name: "title",
      desc: "how touse mark",
    },
  ];
  fs.writeFileSync("articles.json", JSON.stringify(content));
  res.send("succes");
});

app.get("/article/read", (req, res) => {
  res.send({ name: "hello world" });
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
