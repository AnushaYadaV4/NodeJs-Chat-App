const express = require("express");
const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(
    '<form onSubmit=localStorage.setItem("username",document.getElementById("username").value) action="/send" method="POST"><input id="username" type="text" name="username"><button type="submit">Login</button></form>'
  );
});

router.post("/send", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
