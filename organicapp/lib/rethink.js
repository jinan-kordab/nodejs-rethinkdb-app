var rdb = require("rethinkdbdash")({
    port: 28015,
    host: "localhost",
});
  
    module.exports.find = function (databaseName,tableName, id) {
        return rdb.db(databaseName).table(tableName).get(id).run()
        .then(function (result) {
            return result;
        });
    };

    module.exports.findAll = function (databaseName, tableName) {
        return rdb.db(databaseName).table(tableName).run()
        .then(function (cursor) {
            return cursor;
        });
    };

    module.exports.findBy = function (databaseName,tableName, fieldName, value) {
        return rdb.db(databaseName).table(tableName).filter(rdb.row(fieldName).eq(value)).run()
        .then(function (cursor) {
            return cursor;
        });
    };

    module.exports.findIndexed = function (databaseName,tableName, query, index) {
        return rdb.db(databaseName).table(tableName).getAll(query, { index: index }).run()
        .then(function (cursor) {
            return cursor;
        });
    };

    module.exports.save = function (databaseName,tableName, object) {
        return rdb.db(databaseName).table(tableName).insert(object).run()
        .then(function (result) {
            return result;
        });
    };

    module.exports.edit = function (databaseName,tableName, id, object) {
        return rdb.db(databaseName).table(tableName).get(id).update(object).run()
        .then(function (result) {
            return result;
        });
};

module.exports.editcolumnbased = function (databaseName, tableName, column, columnvalue, color, component, Id, Name) { 
    return rdb.db(databaseName).table(tableName).filter(rdb.row(column).eq(columnvalue)).update({"Color": color,"Component":component,"name":Name}).run()
    .then(function (result) {
        return result;
    });
};
module.exports.editcolumnbasedstaple = function (databaseName, tableName, column, columnvalue, energy, watercontent, Id, Name) { 
    return rdb.db(databaseName).table(tableName).filter(rdb.row(column).eq(columnvalue)).update({"Energy": energy,"WaterContent":watercontent,"name":Name}).run()
    .then(function (result) {
        return result;
    });
};

module.exports.editcolumnbasedfruit = function (databaseName, tableName, column, columnvalue, color, component, Id, Name) { 
    return rdb.db(databaseName).table(tableName).filter(rdb.row(column).eq(columnvalue)).update({"Color": color,"Property":component,"name":Name}).run()
    .then(function (result) {
        return result;
    });
};

    module.exports.destroy = function (databaseName,tableName, id) {
        return rdb.db(databaseName).table(tableName).get(id).delete().run()
        .then(function (result) {
            return result;
        });     
};

module.exports.destroybyrow = function (databaseName,tableName, columnname,columnvalue) {
    return rdb.db(databaseName).table(tableName).filter(rdb.row(columnname).eq(columnvalue)).delete().run()
    .then(function (result) {
        return result;
    });     
};

module.exports.authenticateuser = function (databaseName,tableName, userid) {
    return rdb.db(databaseName).table(tableName).filter({"username": "" + userid + ""}).run()
        .then(function (result) {
            console.log(result);
        return result;
    });
};

module.exports.tablelist = function (databaseName) {
    return rdb.db(databaseName).tableList().run()
    .then(function (result) {
        return result;
    });
};