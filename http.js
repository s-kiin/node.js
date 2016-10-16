var http = require('http');
//创建http服务 (转发请求)
var app = http.createServer(function(req,res){
	var sreq = http.request({
		host:'www.baidu.com',
		path:'',
		method: req.method,
		
	},function(){
		sres.pipe(res);
		sres.on('end',function(){
			console.log();
		});
	});
	
	if(/POST/|PUT/i.test(req.method)){
		req.pipe(sreq);
	}else{
		sreq.end();
	}
});

app.listen(3001);
console.log('server started on 127.0.0.1:3001');

/*
var request = require('request');
var remoteUrl = 'http://localhost:8000';
app.use('/remoteAPI', function(req, res) {
console.log(req.url);
var url = remoteUrl + req.url;
req.pipe(request(url)).pipe(res); false
});


req.pipe(request.post(url, {form:req.body})).pipe(res); ok
