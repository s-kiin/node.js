//http://www.runoob.com/nodejs/nodejs-install-setup.html
//index文件

var start = require("./server.js");
var router = require("./router.js");
var requestHandlers = require("./requestHandlers.js");


var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;


//传递函数
start.start(router.route, handle);


