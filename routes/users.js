var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users/:id', function(req, res, next) {
	res.json({
		custom: true,
		userId: req.params.id,
		retLst:{
			a:1
		}
	});
});

module.exports = router;