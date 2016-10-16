//服务器模块


var http = require('http');
var url	 = require('url');

/*
http.createServer(function (require,response){
	//发送http头部
	//http 状态值 :200 :ok
	//内容类型: text/plain
	response.writeHead(200, {'Content-Type':'text/plain'});
	
	//发送响应数据 "hello world"
	response.end('Hello world');
}).listen(8888);

//终端打印信息  可以进入localhost:8888 查看
console.log('Server running at http://127.0.0.1:8888/');
*/


function start(route, handle)
{

function onRequest(request, response)
{
	//var pathName = url.parse('http://user:pass@host.com:8080/start?query=string#hash').pathname;
	//console.log('pathName:%o',pathName);// 打印一个对象
	var pathName = url.parse(request.url).pathname;
	console.log("Request" +pathName+ "received");
	
	route(handle, pathName, response);
	
	/*response.writeHead(200,{"Content-Type":"text/plain"});
	response.write(content);
	response.end();*/
}

//使用函数传递(onRequest)方式  上面是使用匿名函数方式  
http.createServer(onRequest).listen(8888);
console.log("Server has start");	
}

exports.start = start;
