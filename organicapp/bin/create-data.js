var r = require("rethinkdbdash")({
  port: 28015,
  host: "localhost",
});

r.db("test").tableCreate("fruit").run().then(function (response) {
  console.log(response);
  r.db("test").table("fruit").insert({ id: 1, name: "Apple", Color: "Red", Property: "Good energy source" }).run().then(function (response) { console.log(response); }).error(function (err) { console.log("error occured ", err); });
  r.db("test").table("fruit").insert({ id: 2, name: "Orange", Color: "Orange", Property: "Low in calories" }).run().then(function (response) { console.log(response); }).error(function (err) { console.log("error occured ", err); });
  r.db("test").table("fruit").insert({ id: 3, name: "Banana", Color: "Yellow", Property: "Potassium and Vitamin B6" }).run().then(function (response) { console.log(response); }).error(function (err) { console.log("error occured ", err); });
  r.db("test").table("fruit").insert({id: 4,name: "Grapes",Color: "Green",Property: "High in antioxidants"}).run().then(function (response) { console.log(response); }).error(function (err) { console.log("error occured ", err); });
  r.db("test").table("fruit").insert({ id: 5, name: "Strawberries", Color: "Red", Property: "Fat-free and cholesterol-free" }).run().then(function (response) { console.log(response); }).error(function (err) { console.log("error occured ", err); });
}).error(function (err) { console.log("error occured ", err); });


r.db("test").tableCreate("legume").run().then(function (response) {
  console.log(response);
  r.db("test").table("legume").insert({id: 1,name: "Cucumber",Color: "Green",Property: "High in Nutrients"}).run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
  r.db("test").table("legume").insert({id: 2,name: "Tomato",Color: "Red",Property: "High in antioxidants"}).run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
  r.db("test").table("legume").insert({id: 3,name: "Lettuce",Color: "Green",Property: "Good source of fiber"}).run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
  r.db("test").table("legume").insert({id: 4,name: "Onion",Color: "White",Property: "Packed With Nutrients"}).run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
  r.db("test").table("legume").insert({id: 5,name: "Carrot",Color: "Orange",Property: "Rich source of dietary carotenoids"}).run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
}).error(function (err) { console.log("error occured ", err); });

r.db("test").tableCreate("sweet").run().then(function (response) {
  console.log(response);
r.db("test").table("sweet").insert({id: 1,name: "Ice Cream",Color: "White",Component: "Ice crystals and concentrated sweetened cream"}).run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
r.db("test").table("sweet").insert({id: 2, name: "Pie", Color: "Red", Component: "Crust, Filling, and Topping"}).run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
r.db("test").table("sweet").insert({id: 3,name: "Pudding",Color: "Brown",Component: "Milk or fruit juice"}).run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
r.db("test").table("sweet").insert({id: 4,name: "Tart",Color: "White",Component: "Filling over a pastry base"}).run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
r.db("test").table("sweet").insert({id: 5,name: "Peach Cobbler",Color: "Warm orange",Component: "Batter, biscuit, or dumpling"}).run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
}).error(function (err) { console.log("error occured ", err); });

r.db("test").tableCreate("staplefood").run().then(function (response) {
  console.log(response);
  r.db("test").table("staplefood").insert({id: 1,name: "Corn",WaterContent: "10",Energy: "1698"}).run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
  r.db("test").table("staplefood").insert({id: 2,name: "Rice",WaterContent: "12",Energy: "1736"}).run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
  r.db("test").table("staplefood").insert({id: 3,name: "Wheat",WaterContent: "13",Energy: "1574"}).run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
  r.db("test").table("staplefood").insert({id: 4,name: "Potatoes",WaterContent: "10",Energy: "1000"}).run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
  r.db("test").table("staplefood").insert({id: 5,name: "Sweet potatoes",WaterContent: "79",Energy: "1533"}).run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
                                       
}).error(function (err) { console.log("error occured ", err); });
r.db("test").tableCreate("organicproducts").run().then(function (response) {
  console.log(response);
  r.db("test").table("organicproducts").insert({id: 1,name: "Nectarines",WaterContent: "45",Energy: "789"}).run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
  r.db("test").table("organicproducts").insert({id: 2,name: "Bell Peppers",WaterContent: "22",Energy: "1446"}).run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
  r.db("test").table("organicproducts").insert({id: 3,name: "Celery",WaterContent: "32",Energy: "1568"}).run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
  r.db("test").table("organicproducts").insert({id: 4,name: "Apples",WaterContent: "69",Energy: "1050"}).run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
  r.db("test").table("organicproducts").insert({id: 5,name: "Spinach",WaterContent: "98",Energy: "1663"}).run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
}).error(function (err) { console.log("error occured ", err); });

r.db("test").tableCreate("appusers").run().then(function (response) {
}).error(function (err) { console.log("error occured ", err); });

// //Populate table fruit with some data
// r.db("test").table("fruit").insert({id: 1,name: "Apple",Color: "Red",Property: "Good energy source"},
//                                    {id: 2,name: "Orange",Color: "Orange",Property: "Low in calories"},
//                                    {id: 3,name: "Banana",Color: "Yellow",Property: "Potassium and Vitamin B6"},
//                                    {id: 4,name: "Grapes",Color: "Green",Property: "High in antioxidants"},
//                                    { id: 5, name: "Strawberries", Color: "Red", Property: "Fat-free and cholesterol-free"}
//                                   ).run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
// //Populate table legume with some data
// r.db("test").table("legume").insert({id: 1,name: "Cucumber",Color: "Green",Property: "High in Nutrients",},
//                                     {id: 2,name: "Tomato",Color: "Red",Property: "High in antioxidants",},
//                                     {id: 3,name: "Lettuce",Color: "Green",Property: "Good source of fiber",},
//                                     {id: 4,name: "Onion",Color: "White",Property: "Packed With Nutrients",},
//                                     {id: 5,name: "Carrot",Color: "Orange",Property: "Rich source of dietary carotenoids",}
//                                   ).run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
// //Populate table sweet with some data
// r.db("test").table("sweet").insert({id: 1,name: "Ice Cream",Color: "White",Component: "Ice crystals and concentrated sweetened cream",},
//                                    { id: 2, name: "Pie", Color: "Red", Component: "Crust, Filling, and Topping", },
//                                    {id: 3,name: "Pudding",Color: "Brown",Component: "Milk or fruit juice",},
//                                    {id: 4,name: "Tart",Color: "White",Component: "Filling over a pastry base",},
//                                    {id: 5,name: "Peach Cobbler",Color: "Warm orange",Component: "Batter, biscuit, or dumpling",}
//                                   ).run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});
// //Populate table staplefood with some data
// r.db("test").table("staplefood").insert({id: 1,name: "Corn",WaterContent: "10",Energy: "1698",},
//                                         {id: 2,name: "Rice",WaterContent: "12",Energy: "1736",},
//                                         {id: 3,name: "Wheat",WaterContent: "13",Energy: "1574",},
//                                         {id: 4,name: "Potatoes",WaterContent: "",Energy: "",},
//                                         {id: 5,name: "Sweet potatoes",WaterContent: "79",Energy: "1533",}
//                                        ).run().then(function (response) {console.log(response);}).error(function (err) {console.log("error occured ", err);});