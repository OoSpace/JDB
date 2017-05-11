/**
 * Created by oospace on 2017/5/9.
 * 针对JSON文件的增删改查操作的封装
 */

var dbname = "example";
var requirejs = require("requirejs");
var _ = require("underscore");

/*requirejs.config({
 //把node自身的require方法传递给requirejs
 nodeRequire: require
 });*/

var $JDB = requirejs("util/jdb.js");

var _jdb = new $JDB();

//test db
var db = {
    dbName: "example"
}

//_jdb.createDB(db);

//test tb
var testData = {"test": ["1", 2, 3, 4, 5, 6, 76, 8]};
var tb = _.extend({activeTable: "example.json", activeData: JSON.stringify(testData)}, db);

//_jdb.createTB(tb);


//test tb2
var tb2=_.extend({activeTable:"tb2.json",activeData:JSON.stringify(testData)},db);

//_jdb.createTB(tb2);

//test query tb
/*_jdb.queryTB(tb, function (data) {
    console.log(JSON.parse(data))
});*/

//test query db
_jdb.queryDB(db)






















