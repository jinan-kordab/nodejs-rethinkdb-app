var r = require("rethinkdbdash")({
  port: 28015,
  host: "localhost",
});

//Delete test tables in Test database
r.db("test").tableDrop("fruit").run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
r.db("test").tableDrop("legume").run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
r.db("test").tableDrop("sweet").run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
r.db("test").tableDrop("staplefood").run().then(function (response) { console.log(response); }).error(function (err) { console.log("error occured ", err); });
r.db("test").tableDrop("organicproducts").run().then(function (response) { console.log(response); }).error(function (err) { console.log("error occured ", err); });
r.db("test").tableDrop("appusers").run().then(function (response) { console.log(response); }).error(function (err) { console.log("error occured ", err); });

