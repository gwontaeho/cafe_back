const express = require("express");
const router = express();
const { User, Store, Barista } = require("../models");
const { authorization } = require("../middlewares/jwt");

router.get("/", authorization, async (req, res, next) => {
    const { UserId } = req.verified;

    try {
        const user = await User.findByPk(UserId, { include: [{ model: Store }, { model: Barista }], attributes: ["account", "type"] });
        if (!user) return res.sendStatus(400);
        return res.send(user);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

module.exports = router;
