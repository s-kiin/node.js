//请求处理模块

var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");

function start(response)
{
	console.log("Request headler 'start' was called");
	
	/*
	function sleep(milliSeconds){
		var startTime = new Date().getTime();
		while (new Date().getTime() < startTime + milliSeconds);
	}
	sleep(10000);
	return 'hello start';
	*/

	var body = '<html>'+
		'<head>'+
		'<meta http-equiv="Content-Type" content="text/html; '+
		'charset=UTF-8" />'+
		'</head>'+
		'<body>'+
		'<form action="/upload" enctype="multipart/form-data" method="post">'+
		'<input type="file" name="upload">'+
		'<input type="submit" value="upload file" />'+
		'</form>'+
		'</body>'+
		'</html>';
	//exec("find /",
	// 	{timeout: 10000, maxBuffer: 20000*1024}, 
	// 	function (error, stdout, stderr) {

		response.writeHead(200, {"Content-Type":"text/html"});
		response.write(body);
		response.end();

	//});
	
	
}

function upload(response, request)
{
	console.log("Request headler 'upload' was calld.");
	var form = new formidable.IncomingForm();
	console.log("about to parse");
	form.uploadDir = "E:/qttest/node";
	form.parse(request, function(error, fields, files){
		console.log("parsing done");
		//files.upload.path 路径好似有问题,在win下面打印没有变化.  不好的解决方式是直接指定form.uploadDir  
		fs.renameSync(files.upload.path, form.uploadDir+"/test.png");
				console.log(files.upload.path);
		/*  这个函数的源码
		fs.renameSync = function(oldPath, newPath) {
			nullCheck(oldPath);
			nullCheck(newPath);
				return binding.rename(pathModule._makeLong(oldPath),
                       pathModule._makeLong(newPath));
		};
		*/
		
		response.writeHead(200,{"Content-Type":"text/html"});
		response.write("received image:<br/>");
		response.write("<img src='/show' />");
		response.end();
	});
}

function show(response){
	console.log("Request handler 'show' was called");
	fs.readFile("E:/qttest/node/test.png", "binary", function(error, file){
		if(error){
			response.writeHead(500,{"Content-Type":"text/plain"});
			response.write(error + "\n");
			response.end();
		}else{
			response.writeHead(200,{"Content-Type":"image/png"});
			response.write(file, "binary");
			response.end();
		}
	});
}

//把函数作为模块的方法导出
exports.start = start;
exports.upload = upload;
exports.show = show;