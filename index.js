const express = require("express");
const mongoose = require("mongoose")

const PORT = process.env.PORT || 5000;
const app = express();

const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");

app.listen(PORT, (err) => {
  if (!err) return console.log("your server is runnig sir");
  console.log(err);
});

mongoose.connect('mongodb://localhost:27017/blog-app', (err) => {
  if (!err) return console.log('mongodb connection started');
  console.log(err);
})

function log(req, res, next) {
  console.log(new Date(), req.method, req.url);
  next()
}

app.use(express.json())
app.use(log)
app.use("/users", usersRouter);
app.use("/posts", postsRouter);
