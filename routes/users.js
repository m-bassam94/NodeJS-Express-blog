const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("get all users");
});

router.get("/:id", (req, res) => {
  res.send("get one user");
});

router.get("/:id/posts", (req, res) => {

})

router.post("/new", (req, res) => {
  res.send("create new user");
});

router.put("/edit/:id", (req, res) => {
  res.send("update a user");
});

router.delete("/delete/:id", (req, res) => {
  res.send("delete a user");
});

module.exports = router;
