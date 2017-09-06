import express from "express";
var router = express.Router();

// router.use(function (req, res, next) {
// 	next();
// });

/* GET users listing. */
router.get('/:id', function (req, res, next) {
	res.json({
		custom: true,
		userId: req.params.id,
		retLst: {
			a: 1
		}
	});
});

export default router;