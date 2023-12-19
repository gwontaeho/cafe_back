const express = require("express");
const router = express();
const { Post, Store } = require("../models");
const { authorization } = require("../middlewares/jwt");
const { COUNTRIES } = require("../constants");

/**
 * 공고 추가
 */
router.post("/", authorization, async (req, res, next) => {
    const { StoreId } = req.verified;
    if (!StoreId) return res.sendStatus(400);
    try {
        const post = await Post.create({ ...req.body, StoreId });
        return res.send(post);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

/**
 * 구인공고 목록 조회
 */
router.get("/longs", async (req, res, next) => {
    const { perPage, page, country } = req.query;
    const limit = Number(perPage);
    const offset = limit * (Number(page) - 1);
    const where = country === "0" ? {} : { sido: COUNTRIES.find((v, i) => String(i) === country) };

    try {
        const longs = await Post.findAndCountAll({
            where: { type: "L" },
            include: [{ model: Store, where }],
            order: [["createdAt", "DESC"]],
            limit,
            offset,
            raw: true,
            nest: true,
        });
        return res.send(longs);
    } catch (error) {
        console.log(error);
    }
});

/**
 * 구인공고 목록 조회 (카페 회원)
 */
router.get("/my-longs", authorization, async (req, res, next) => {
    const { StoreId } = req.verified;
    try {
        const longs = await Post.findAll({
            where: { type: "L", StoreId },
            include: [{ model: Store }],
            order: [
                ["days", "ASC"],
                ["begin", "ASC"],
            ],
            raw: true,
            nest: true,
        });
        return res.send(longs);
    } catch (error) {
        console.log(error);
    }
});

/**
 * 일일공고 목록 조회
 */
router.get("/shorts", async (req, res, next) => {
    const { perPage, page, country } = req.query;

    const limit = Number(perPage);
    const offset = limit * (Number(page) - 1);
    const where = country === "0" ? {} : { sido: COUNTRIES.find((v, i) => String(i) === country) };

    try {
        const shorts = await Post.findAndCountAll({
            where: { type: "S" },
            include: [{ model: Store, where }],
            order: [
                ["date", "ASC"],
                ["begin", "ASC"],
            ],
            limit,
            offset,
            raw: true,
            nest: true,
        });
        return res.send(shorts);
    } catch (error) {
        console.log(error);
    }
});

/**
 * 일일공고 목록 조회 (카페 회원)
 */
router.get("/my-shorts", authorization, async (req, res, next) => {
    const { StoreId } = req.verified;
    try {
        const shorts = await Post.findAll({
            where: { type: "S", StoreId },
            include: [{ model: Store }],
            order: [
                ["date", "ASC"],
                ["begin", "ASC"],
            ],
            raw: true,
            nest: true,
        });
        return res.send(shorts);
    } catch (error) {
        console.log(error);
    }
});

/**
 * 공고 조회
 */
router.get("/:id", async (req, res, next) => {
    const { id } = req.params;

    try {
        const post = await Post.findByPk(id, { include: [{ model: Store }] });
        if (!post) return res.sendStatus(400);
        return res.send(post);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

/**
 * 공고 삭제
 */
router.delete("/:id", authorization, async (req, res, next) => {
    const { StoreId } = req.verified;
    const { id } = req.params;

    try {
        const result = await Post.destroy({ where: { id, StoreId } });
        if (result !== 1) return res.sendStatus(400);
        return res.sendStatus(200);
    } catch (error) {
        return res.sendStatus(500);
    }
});

module.exports = router;
