const express = require("express");
const router = express();
const { Career } = require("../models");

/**
 * 경력 추가
 */
router.post("/", async (req, res, next) => {
    const { brand, period } = req.body;
    try {
        const career = await Career.create({ brand, period });
        return res.send(career);
    } catch (error) {
        return res.sendStatus(500);
    }
});

/**
 * 경력 삭제
 */
router.delete("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
        await Career.destroy({ where: { id } });
        return res.sendStatus(200);
    } catch (error) {
        return res.sendStatus(500);
    }
});

/**
 * 경력 조회
 */
router.get("/", async (req, res, next) => {
    try {
        const careers = await Career.findAll({ raw: true });
        return res.send(careers);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
