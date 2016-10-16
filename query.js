var sql = "select * from edai_usersystab where `username`='tester3' and limit = 1";
var query = require('./mysql.js');

query(sql,function(err){
	console.log(err);
});