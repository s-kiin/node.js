//路由模块(不是真正针对请求"采取行动"的模块),方便以后的扩展

function route(handle, pathName, response, request)
{
	console.log("About to route a request for " + pathName);
	//检查给定的路径对应的请求处理程序是否存在，如果存在的话直接调用相应的函数
	if (typeof handle[pathName] === 'function' ) {
		return handle[pathName](response, request);
	}else{
		console.log("No request handler found for " + pathName);
		response.writeHead(404,{"Content-Type":"text/plain"});
		response.write("404 not found");
		response.end();
	}
}

exports.route = route;