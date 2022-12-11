const express = require("express"),
      bodyParser = require("body-parser"),
      path = require("path"),
      webpush = require("web-push");

const vapidKeys = webpush.generateVAPIDKeys(),
      port = 1234,
      mail = "kostyach",
      publicKey = "BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSnfckjBJuBkr3qBUYIHBQFLXYp5Nksh8U",
      privateKey = "UUxI4O8-FbRouAevSmBQ6o18hgE4nSG3qwvJTfKc-ls";

webpush.setVapidDetails("mailto:" + mail, publicKey, privateKey);
const app = express();
app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/sendpush", (req, res) => {
  res.status(201).json({}); 
  webpush.sendNotification(req.body, JSON.stringify({
    title: "Notification",
    body: "Text"
  }))
  .catch((err) => { console.log(err); });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`)
});