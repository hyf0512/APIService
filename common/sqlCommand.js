var user_status = {
	insertOne:'INSERT INTO xuehao (id, name) VALUES(?,?)',
	select:'SELECT * FROM xuehao'
};

module.exports = {
	user_status:user_status
};