//var mysql = require('D:/tool/node/node_global/node_modules/mysql');
var mysql = require('mysql');
//创建连接池对象
//createPool方法的属性connectionLimit设置连接池中的最大连接数，默认为10
var pool = mysql.createPool({
	host:'192.168.1.52',
	port:'3306',
	database:'demo',
	user:'xsy',
	password:'xsy123',
	connectionLimit:10, 
});

//getConnection方法是从连接池获取一个连接.
var query = function(sql){
	pool.getConnection(function(err,connection){
		if(err){
			console.log('连接失败咯');
		}else{
			console.log('连接ok,接下来...');
			connection.query(sql,function(err,rows){
				if(err){
					console.log('查询失败');
					connection.release(); //归还到连接池中
				}else{
					console.log(rows);
					connection.release();
				}
			});
		}
	});	
};

module.exports = query;






/*
connection.release() 当一个连接不需要使用时，使用该方法将其归还到连接池中

connection.destroy() 当一个连接不需要使用且需要从连接池中移除时，可以使用该方法

pool.end() 当一个连接池不需要使用时，可以使用该方法关闭连接池
*/