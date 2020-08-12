var db = require("./../database-mysql/index");
exports.rating = function(req,res){
    var id = req.body.id;
    var ratingnumber = req.body.rating;
    console.log(req.body)
   let sql = `UPDATE officedata SET rating = ? WHERE office_id = ?`;
   let data = [ratingnumber,id];
    db.connection.query(sql,data,function (error, results, fields) {
        if (error) {
          return res.send(error)
        } else {
          res.send({
            "code":200,
            
            "success" : "rating"
              });
            
          }
      });
      
}