var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');

router.get('/insert',function(req,res,next){
	userDao.addUserAction(req,res,next);
});
module.exports = router;