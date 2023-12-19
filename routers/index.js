const express = require("express");
const router = express();

const user = require("./User");
const store = require("./Store");
const post = require("./Post");
const career = require("./Career");
const rest = require("./Rest");

router.use("/users", user);
router.use("/stores", store);
router.use("/posts", post);
router.use("/careers", career);
router.use("/", rest);

module.exports = router;
