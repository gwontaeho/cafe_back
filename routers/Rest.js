const express = require("express");
const router = express();
const { User, Store, Barista } = require("../models");
const { signToken } = require("../middlewares/jwt");

/**
 * 로그인
 */
router.post("/signin", async (req, res, next) => {
    const { account, password } = req.body;
    try {
        const user = await User.findOne({
            where: { account, password },
            include: [
                { model: Store, attributes: ["id"] },
                { model: Barista, attributes: ["id"] },
            ],
            raw: true,
            nest: true,
        });
        if (!user) return res.sendStatus(400);

        const {
            id: UserId,
            type,
            Store: { id: StoreId },
            Baristum: { id: BaristumId },
        } = user;

        const payload = { UserId, type };
        if (StoreId) payload.StoreId = StoreId;
        if (BaristumId) payload.BaristumId = BaristumId;

        const token = signToken(payload);
        return res.cookie("token", token).sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

/**
 * 회원가입
 */
router.post("/signup", async (req, res, next) => {
    const { account, password, type } = req.body;
    try {
        const user = await User.create({ account, password, type });
        const UserId = user.id;

        const payload = { UserId, type };

        if (type === "S") {
            const { b_nm, b_no, p_nm, start_dt, address, address_extra, sido, sigungu, bname, contact, email, brand, latitude, longitude } = req.body;
            const store = await Store.create({
                UserId,
                b_nm,
                b_no,
                p_nm,
                start_dt,
                address,
                address_extra,
                sido,
                sigungu,
                bname,
                contact,
                email,
                brand,
                latitude,
                longitude,
            });
            payload.StoreId = store.id;
        }
        if (type === "B") {
            const barista = await Barista.create({ UserId });
            payload.BaristumId = barista.id;
        }

        const token = signToken(payload);
        return res.cookie("token", token).sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

module.exports = router;
