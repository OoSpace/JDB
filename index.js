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

var db = {
    dbName: "example"
}

_jdb.createDB(db);

var tb = _.extend({activeTable: "example.json", activeData: []}, db);

_jdb.createTB(tb);

























