var model = module.exports;
var r = require("rethinkdbdash")({
  port: "28015",
  host: "localhost",
});

model.setup = function (callback) {
    console.log("Setting up RethinkDB...");
    
    r.db("test")
      .table("fruit")
      .changes()
      .run()
      .then(function (cursor) {
        cursor.each(function (error, row) {
          callback(row);
        });
      })
      .error(function (err) {
        console.log(err);
      });

}