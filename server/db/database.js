var mysql = require('mysql');
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
<<<<<<< HEAD
  password: '0000',
=======
  password: 'ahmedttm1999@@@',
>>>>>>> 4958c3842ccc46fcf954eb5ae882ec30be18cfbe
});

con.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
});
