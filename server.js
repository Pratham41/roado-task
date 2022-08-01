const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
require("./config/dbConnect");
const wordsRoute = require('./routes/words')

app.use(express.json());
app.use('/roado/api/v1/words',wordsRoute)

let port = process.env.PORT || 8000;

if (process.env.NODE_ENV !== "production") {
  app.use("/", express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}


app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
