var db = require('../common/basicConnection');
var $sqlCommands = require('../common/sqlCommand');
function addUserAction(req,res,next){
	var param = req.query || req.params;
	console.log(param.id);
	console.log(param.name);
	db.queryArgs($sqlCommands.user_status.insertOne,
		[param.id,param.name],
		function(err,result){
		if(!err){
			result = {
				code:200,
				msg:'successful'
			};
		}
		db.doReturn(res,result);
	});
}
module.exports = {
	addUserAction:addUserAction
};