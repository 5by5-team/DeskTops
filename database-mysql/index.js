var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	// host: '127.0.0.1',
	user: 'root',
	// user:'root',
	password: '0000',
	// password: '1418',
	port: '3000',
	database: 'finderdata',
});

// connection.connect(function (err) {
//   if (err) {
//     console.error('Database connection failed: ' + err.stack);
//     return;
//   }

//   console.log('Connected to database.');
// });
// var connection = mysql.createConnection({`
//   host: 'localhost',
//   user: 'root',
//   password: '1418',
//   database: 'finderdata',
// });

var selectAll = function (callback) {
	connection.query('SELECT * FROM items', function (err, results, fields) {
		if (err) {
			callback(err, null);
		} else {
			callback(null, results);
		}
	});
};
module.exports.connection = connection;
module.exports.selectAll = selectAll;
