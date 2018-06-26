var http = require('http');
var config = require('./config');

let getMethod = require('./services/getMethod');
let postMethod = require('./services/postMethod');

//create a server object:
http.createServer(function (req, res) {
	const headers = {
		'Access-Control-Allow-Origin': '*',
		"Access-Control-Allow-Headers": 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
		'Access-Control-Allow-Headers': 'X-Requested-With',
		"Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE"
	};
	var url = req.url;
	var method = req.method;

	switch (method) {
		case 'GET':
			switch (url) {
				case '/':
					res.writeHead(200, headers);
					res.write('index');
					res.end();
					break
				case '/users':
					res.writeHeader(200, {'Content-Type': 'text/json'})
					var data = getMethod.getListUser();
					res.end(data);
					break
				case '/products':
					res.writeHeader(200, {'Content-Type': 'text/json'})
					var data = getMethod.getListProduct();
					res.end(data);
					break
				case '/bills':
					res.writeHeader(200, {'Content-Type': 'text/json'})
					var data = getMethod.getListBill();
					res.end(data);
					break
				case '/suppliers':
					res.writeHeader(200, {'Content-Type': 'text/json'})
					var data = getMethod.getListSupplier();
					res.end(data);
					break
				default: break
			}
			return
		case 'POST':
			return
		default: break
	}

}).listen(config.port, err => {
    if (err != null) {
        console.log('Error: ', err);
    } else {
        console.log('Server is starting at port ' + config.port);
    }
}) 

