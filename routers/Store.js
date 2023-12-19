const express = require("express");
const router = express();
const { Store, Post } = require("../models");

router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
        const store = await Store.findByPk(id, { include: [{ model: Post, where: { type: "L" } }] });
        return res.send(store);
    } catch (error) {
        console.log(error);
    }
});

router.get("/", async (req, res, next) => {
    try {
        const stores = await Store.findAll();
        console.log(stores);
        return res.send(stores);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
