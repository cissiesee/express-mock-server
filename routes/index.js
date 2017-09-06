import express from "express";
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.header("Content-Type", "text/html;charset=utf-8");
    res.render('index', { title: 'Linkage Mock Server' });
});

export default router;
