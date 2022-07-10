var express = require('express');
var router = express.Router();
var rdb = require('../lib/rethink');

checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) { return next() }
  res.redirect("/login")
}
//Gets all tables in database
var tblList = new Promise((resolve, reject) => {
  resolve(
    rdb.tablelist('test').then(
      function (info) {
        if (!info) {
          var notFoundError = new Error('info not found');
          notFoundError.status = 404;
          return next(notFoundError);
        }
        console.log(info);
        return info;
      })
  );
});

router.get('/logout',checkAuthenticated, function (req, res, next) {
    req.logOut()
    res.redirect("/login")
    console.log(`-------> User Logged out`)
});
// Landing page
router.get('/', function (req, res, next) {
  tblList.then(function (result) {res.render('landing', { title: "this is data" }); })
});

//home page
router.get('/home', function (req, res, next) {
  tblList.then(function (result) {res.render('index', { title: "this is data",food:false, listoffoods: JSON.stringify(result) }); })
});


//Get all once clicked - fruit, legumes, etc ...
router.get('/food/:f',checkAuthenticated, function (req, res, next) {
   console.log(req.params.f);
  var tblData = new Promise((resolve, reject) => {
    resolve(
      rdb.findAll('test',req.params.f).then(
        function (info) {
          if (!info) {
            var notFoundError = new Error('info not found');
            notFoundError.status = 404;
            return next(notFoundError);
          }
          console.log(info);
          return info;
        })
    );
  });

  tblData.then(function (resulttblData) {
    tblList.then(function (resulttblList) {
      console.log('BEFORE SENDING');
      if (req.params.f == 'organicproducts') {
      
        res.render('index', { title: "organicproducts",table:req.params.f,organicproduts:true,staplefood:false, appusers:false,diffscema: true,sweet:false, food: true, listoffoods: JSON.stringify(resulttblList), fooddata: resulttblData });
      }
      else if (req.params.f == 'staplefood')
      {
        res.render('index', { title: "staplefood",table:req.params.f, diffscema: true,sweet:false,appusers:false, staplefood:true, organicproduts:false,food: true, listoffoods: JSON.stringify(resulttblList), fooddata: resulttblData });
        
        }
      else if (req.params.f == 'sweet') {
        res.render('index', { title: "sweet",table:req.params.f, diffscema: true,sweet:true, food: true, listoffoods: JSON.stringify(resulttblList), fooddata: resulttblData });
      }
      else if (req.params.f == 'appusers') {
        res.render('index', { title: "appusers",table:req.params.f, diffscema: true,sweet:false,appusers:true, food: true, listoffoods: JSON.stringify(resulttblList), fooddata: resulttblData });
      }
      else if (req.params.f == 'fruit') {
        res.render('index', { title: "fruit",table:req.params.f, diffscema: false,sweet:false,appusers:false, food: true, listoffoods: JSON.stringify(resulttblList), fooddata: resulttblData });
      }
      else
      {
        res.render('index', { title: "legume",table:req.params.f,diffscema:false,sweet:false, food: true, listoffoods: JSON.stringify(resulttblList), fooddata: resulttblData });  
      }
    })
  })
});

//New fruit redirect
router.get('/food/products/:f',checkAuthenticated, function (req, res, next) {
  console.log(req.params.f);
  switch (req.params.f)
  {
    case "fruit":
      {
        res.render('newfruit', { title: "Add new fruit"});
      }
    case "legume":
      {
        res.render('newlegume', { title: "Add new legume"});
      }
    case "organicproducts":
      {
        res.render('neworganicproducts', { title: "Add new organic product"});
      }
    case "staplefood":
      {
        res.render('newstaplefood', { title: "Add new staplefood"});
      }
    case "sweet":
      {
        res.render('newsweet', { title: "Add new sweet"});
      }
  }
  
});


//Add new fruit
router.post('/food/products/fruit/',checkAuthenticated, function (req, res, next) {
  console.log('Form request:', req.body.color);

  var fruitColor = req.body.color;
  var fruitProperty = req.body.property;
  var fruitid = parseInt(req.body.id);
  var fruitName = req.body.name;

var addNewFruit = new Promise((resolve, reject) => {
  resolve(
    rdb.save('test', 'fruit',{ "Color": fruitColor, "Property": fruitProperty, "id":fruitid, "name":fruitName}).then(
      function (info) {
        if (!info) {
          var notAddedError = new Error('fruit info not added');
          notAddedError.status = 404;
          return next(notAddedError);
        }
        console.log(info);
        return info;
      })
  );
});
  

  addNewFruit.then(function () {
    tblList.then(function (result)
    {
      // res.render('index', {
      //   title: "Home ", food: false, listoffoods: JSON.stringify(result)
      // });
      res.redirect("/home");

    })
  })
});

//Form post new legume
router.post('/food/products/legume/',checkAuthenticated, function (req, res, next) {
  console.log('Form request:', req.body.color);
  
  var fruitColor = req.body.color;
  var fruitProperty = req.body.property;
  var fruitid = parseInt(req.body.id);
  var fruitName = req.body.name;

var addNewLegume = new Promise((resolve, reject) => {
  resolve(
    rdb.save('test', 'legume',{ "Color": fruitColor, "Property": fruitProperty, "id":fruitid, "name":fruitName}).then(
      function (info) {
        if (!info) {
          var notAddedError = new Error('fruit info not added');
          notAddedError.status = 404;
          return next(notAddedError);
        }
        console.log(info);
        return info;
      })
  );
});
addNewLegume.then(function () {
    tblList.then(function (result) { res.render('index', { title: "Home ", food: false, listoffoods: JSON.stringify(result) }); })
  })
});

//Add new organic product
router.post('/food/products/organicproduct/',checkAuthenticated, function (req, res, next) {
  console.log('Form request:', req.body.color);
  
  var  energy = req.body.color;
  var watercontent = req.body.property;
  var id = parseInt(req.body.id);
  var name = req.body.name;

var addNewOrgProd = new Promise((resolve, reject) => {
  resolve(
    rdb.save('test', 'organicproducts',{ "Energy": energy, "WaterContent": watercontent, "id":id, "name":name}).then(
      function (info) {
        if (!info) {
          var notAddedError = new Error('organicproduct info not added');
          notAddedError.status = 404;
          return next(notAddedError);
        }
        console.log(info);
        return info;
      })
  );
});
addNewOrgProd.then(function () {
    tblList.then(function (result) { res.render('index', { title: "Home ", food: false, listoffoods: JSON.stringify(result) }); })
  })
});

//Add new staplefood
router.post('/food/products/staplefood/',checkAuthenticated, function (req, res, next) {
  console.log('Form request:', req.body.color);
  
  var  energy = req.body.color;
  var watercontent = req.body.property;
  var id = parseInt(req.body.id);
  var name = req.body.name;

var addNewstaplefood = new Promise((resolve, reject) => {
  resolve(
    rdb.save('test', 'staplefood',{ "Energy": energy, "WaterContent": watercontent, "id":id, "name":name}).then(
      function (info) {
        if (!info) {
          var notAddedError = new Error('staplefood info not added');
          notAddedError.status = 404;
          return next(notAddedError);
        }
        console.log(info);
        return info;
      })
  );
});
addNewstaplefood.then(function () {
    tblList.then(function (result) { res.render('index', { title: "Home ", food: false, listoffoods: JSON.stringify(result) }); })
  })
});

//Add new sweet
router.post('/food/products/sweet/',checkAuthenticated, function (req, res, next) {
  console.log('Form request:', req.body.color);
  
  var sweetCoolor = req.body.color;
  var sweetComponent = req.body.property;
  var sweetId = parseInt(req.body.id);
  var sweetName = req.body.name;

var addNewSweet = new Promise((resolve, reject) => {
  resolve(
    rdb.save('test', 'sweet',{ "Color": sweetCoolor, "Component": sweetComponent, "id":sweetId, "name":sweetName}).then(
      function (info) {
        if (!info) {
          var notAddedError = new Error('sweet info not added');
          notAddedError.status = 404;
          return next(notAddedError);
        }
        console.log(info);
        return info;
      })
  );
});
addNewSweet.then(function () {
    tblList.then(function (result) { res.render('index', { title: "Home ", food: false, listoffoods: JSON.stringify(result) }); })
  })
});

//Edit, delete, update sweet
router.post('/food/products/sweet/:id',checkAuthenticated, function (req, res, next) {
  var action = req.body.gEditDelete;
  var sweetid = req.params.id;

  console.log("sweetaddorupdate is: " + action);
  console.log("sweetid is: " + sweetid);

  if (action == "sweetedit")
  {
    var editSweetItem = new Promise((resolve, reject) => {
      resolve(
        rdb.findBy('test', 'sweet', 'id', parseInt(sweetid)).then(
          function (info) {
            if (!info) {
              var notAddedError = new Error('sweet info not updated');
              notAddedError.status = 404;
              return next(notAddedError);
            }
            console.log("Rsult is: " + info);
            return info;
          })
      );
    });
    
    editSweetItem.then(function (result) {
      res.render('editsweet', { title: "Home ", selSweet: JSON.stringify(result) });
    });
  }
  else if (action == "sweetdelete")
  {
    var deleteSweetItem = new Promise((resolve, reject) => {
      resolve(
        rdb.destroybyrow('test', 'sweet', 'id', parseInt(sweetid)).then(
          function (info) {
            if (!info) {
              var notAddedError = new Error('sweet info not deleted');
              notAddedError.status = 404;
              return next(notAddedError);
            }
            console.log("Rsult is: " + info);
            return info;
          })
      );
    });
  

    deleteSweetItem.then(function (resulttblData) {
      tblList.then(function (resulttblList) {        
        res.render('index', { title: "Sweet "+sweetid+" Deleted", diffscema: false, sweet: false, food: true, listoffoods: JSON.stringify(resulttblList), fooddata: resulttblData });
      })
    });
  }
  else if (action == "update")
  {
    var colorToUpdate = req.body.color;
    var componentToUpdate = req.body.component;
    var idToUpdate = req.body.id;
    var nameToUpdate = req.body.name;

    console.log("Sweet data to update:" + colorToUpdate + ":" + componentToUpdate + ":" + idToUpdate + ":" + nameToUpdate);
    
    var updateTblSweet = new Promise((resolve, reject) => {
      resolve(
        rdb.editcolumnbased('test', 'sweet', 'id',parseInt(idToUpdate), colorToUpdate, componentToUpdate, idToUpdate, nameToUpdate).then(
          function (info) {
            if (!info) {
              var notFoundError = new Error('info not found');
              notFoundError.status = 404;
              return next(notFoundError);
            }
            console.log(info);
            return info;
          })
      );
    });
    updateTblSweet.then(function (resulttblData) {
      tblList.then(function (resulttblList) {
          res.render('index', { title: "this is data",diffscema:false,sweet:false, food: true, listoffoods: JSON.stringify(resulttblList), fooddata: resulttblData });   
      })
    })
  }
});
//Edit, delete, update staplefood
router.post('/food/products/staplefood/:id',checkAuthenticated, function (req, res, next) {
  var action = req.body.gEditDelete;
  var id = req.params.id;
  var schema = req.body.schema;


  console.log("productaddedit is: " + action);
  console.log("product id is: " + id);

  if (action == "staplefoodedit")
  {
    var editStaplefoodItem = new Promise((resolve, reject) => {
      resolve(
        rdb.findBy('test', 'staplefood', 'id', parseInt(id)).then(
          function (info) {
            if (!info) {
              var notAddedError = new Error('sweet info not updated');
              notAddedError.status = 404;
              return next(notAddedError);
            }
            console.log("Rsult is: " + info);
            return info;
          })
      );
    });
    
    editStaplefoodItem.then(function (result) {
      res.render('editstaplefood', { title: "Home ", selStapleFood: JSON.stringify(result) });
    });
  }
  else if (action == "staplefooddelete")
  {
    var deleteSweetItem = new Promise((resolve, reject) => {
      resolve(
        rdb.destroybyrow('test', 'staplefood', 'id', parseInt(id)).then(
          function (info) {
            if (!info) {
              var notAddedError = new Error('sweet info not deleted');
              notAddedError.status = 404;
              return next(notAddedError);
            }
            console.log("Rsult is: " + info);
            return info;
          })
      );
    });
    
    deleteSweetItem.then(function (resulttblData) {
      tblList.then(function (resulttblList) {
        res.render('index', { title: "Staple "+id+" Deleted", diffscema: false, sweet: false, food: true, listoffoods: JSON.stringify(resulttblList), fooddata: resulttblData });
      })
    });
  }
  else if (action == "update")
  {
    var energyToUpdate = req.body.energy;
    var watercontentToUpdate = req.body.watercontent;
    var idToUpdate = req.body.id;
    var nameToUpdate = req.body.name;

    console.log("Staplefood data to update:" + energyToUpdate + ":" + watercontentToUpdate + ":" + idToUpdate + ":" + nameToUpdate);
    
    var updateTblstaplefood = new Promise((resolve, reject) => {
      resolve(
        rdb.editcolumnbasedstaple('test', 'staplefood', 'id',parseInt(idToUpdate), energyToUpdate, watercontentToUpdate, idToUpdate, nameToUpdate).then(
          function (info) {
            if (!info) {
              var notFoundError = new Error('info not found');
              notFoundError.status = 404;
              return next(notFoundError);
            }
            console.log(info);
            return info;
          })
      );
    });
    updateTblstaplefood.then(function (resulttblData) {
      tblList.then(function (resulttblList) {
          res.render('index', { title: "this is data",diffscema:false,sweet:false, food: true, listoffoods: JSON.stringify(resulttblList), fooddata: resulttblData });   
      })
    })
  }
});
//Edit, delete, update organicproduct
router.post('/food/products/organicproduct/:id',checkAuthenticated, function (req, res, next) {
  var action = req.body.gEditDelete;
  var id = req.params.id;
  var schema = req.body.schema;


  console.log("productaddedit is: " + action);
  console.log("product id is: " + id);

  if (action == "staplefoodedit")
  {
    var editStaplefoodItem = new Promise((resolve, reject) => {
      resolve(
        rdb.findBy('test', 'organicproducts', 'id', parseInt(id)).then(
          function (info) {
            if (!info) {
              var notAddedError = new Error('sweet info not updated');
              notAddedError.status = 404;
              return next(notAddedError);
            }
            console.log("Rsult is: " + info);
            return info;
          })
      );
    });
    
    editStaplefoodItem.then(function (result) {
      res.render('editorganicproduct', { title: "Home ", selStapleFood: JSON.stringify(result) });
    });
  }
  else if (action == "staplefooddelete")
  {
    var deleteSweetItem = new Promise((resolve, reject) => {
      resolve(
        rdb.destroybyrow('test', 'organicproducts', 'id', parseInt(id)).then(
          function (info) {
            if (!info) {
              var notAddedError = new Error('sweet info not deleted');
              notAddedError.status = 404;
              return next(notAddedError);
            }
            console.log("Rsult is: " + info);
            return info;
          })
      );
    });
    
    deleteSweetItem.then(function (resulttblData) {
      tblList.then(function (resulttblList) {
        res.render('index', { title: "ORganic Pr. " + id + " Deleted", diffscema: false, sweet: false, food: true, listoffoods: JSON.stringify(resulttblList), fooddata: resulttblData });
      })
    });
  }
  else if (action == "update")
  {
    var energyToUpdate = req.body.energy;
    var watercontentToUpdate = req.body.watercontent;
    var idToUpdate = req.body.id;
    var nameToUpdate = req.body.name;

    console.log("Staplefood data to update:" + energyToUpdate + ":" + watercontentToUpdate + ":" + idToUpdate + ":" + nameToUpdate);
    
    var updateTblstaplefood = new Promise((resolve, reject) => {
      resolve(
        rdb.editcolumnbasedstaple('test', 'organicproducts', 'id',parseInt(idToUpdate), energyToUpdate, watercontentToUpdate, idToUpdate, nameToUpdate).then(
          function (info) {
            if (!info) {
              var notFoundError = new Error('info not found');
              notFoundError.status = 404;
              return next(notFoundError);
            }
            console.log(info);
            return info;
          })
      );
    });
    updateTblstaplefood.then(function (resulttblData) {
      tblList.then(function (resulttblList) {
          res.render('index', { title: "this is data",diffscema:false,sweet:false, food: true, listoffoods: JSON.stringify(resulttblList), fooddata: resulttblData });   
      })
    })
  }
});

//Edit, delete, update fruits and legumes
router.post('/food/products/product/:id',checkAuthenticated, function (req, res, next) {
  var action = req.body.gEditDelete;
  var id = req.params.id;
  var table = req.body.table;

  console.log("sweetaddorupdate is: " + action);
  console.log("sweetid is: " + id);

  if (action == "productedit")
  {
    var editItem = new Promise((resolve, reject) => {
      resolve(
        rdb.findBy('test', '' + table + '', 'id', parseInt(id)).then(
          function (info) {
            if (!info) {
              var notAddedError = new Error('sweet info not updated');
              notAddedError.status = 404;
              return next(notAddedError);
            }
            console.log("Rsult is: " + info);
            return info;
          })
      );
    });
    
    editItem.then(function (result) {
      res.render('edit' + table + '', { title: "Editing " + table, Table:table, selectedFood: JSON.stringify(result) });
    });
  }
  else if (action == "productdelete")
  {
    var deleteSweetItem = new Promise((resolve, reject) => {
      resolve(
        rdb.destroybyrow('test', '' + table + '', 'id', parseInt(id)).then(
          function (info) {
            if (!info) {
              var notAddedError = new Error('product info not deleted');
              notAddedError.status = 404;
              return next(notAddedError);
            }
            console.log("Rsult is: " + info);
            return info;
          })
      );
    });
    
    deleteSweetItem.then(function (resulttblData) {
      tblList.then(function (resulttblList) {
        res.render('index', { title: "Product "+ id +" Deleted", diffscema: false, sweet: false, food: true, listoffoods: JSON.stringify(resulttblList), fooddata: resulttblData });
      })
    });
  }
  else if (action == "update")
  {
    var colorToUpdate = req.body.color;
    var propertyToUpdate = req.body.property;
    var idToUpdate = req.body.id;
    var nameToUpdate = req.body.name;

    console.log("fruit data to update:" + colorToUpdate + ":" + propertyToUpdate + ":" + idToUpdate + ":" + nameToUpdate);
    
    var updateTblstaplefood = new Promise((resolve, reject) => {
      resolve(
        rdb.editcolumnbasedfruit('test', '' + table + '', 'id',parseInt(idToUpdate), colorToUpdate, propertyToUpdate, idToUpdate, nameToUpdate).then(
          function (info) {
            if (!info) {
              var notFoundError = new Error('info not found');
              notFoundError.status = 404;
              return next(notFoundError);
            }
            console.log(info);
            return info;
          })
      );
    });
    updateTblstaplefood.then(function (resulttblData) {
      tblList.then(function (resulttblList) {
          res.render('index', { title: "this is data",diffscema:false,sweet:false, food: true, listoffoods: JSON.stringify(resulttblList), fooddata: resulttblData });   
      })
    })
  }
});

module.exports = router;