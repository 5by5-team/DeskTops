var db = require("./../database-mysql/index");
exports.addoff = function(req,res){
    console.log(req.body);
    let sql = "INSERT INTO officedata SET ?";
    let post = {
      photo: req.body.photo,
       discribe: req.body.discribe,
       city: req.body.city,
       price :req.body.price,
       idowner:req.body.idowner,
    }
    db.connection.query(sql,post, function (error, results, fields) {
        if (error) {
          return res.send(error)
        } else {
          res.send({
            "code":200,
            "success":"added"
              });
              
          }
      });
      
}