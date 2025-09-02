import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hey! hi I'm from Routing.js");
});
export default router;