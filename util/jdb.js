/**
 * Created by oospace on 2017/5/9.
 */
define(function (require, exports, module) {

    var FS = require("util/fs.js");
    var _FS = new FS();
    var _ = require("underscore");
    var promise = require("promise");

    var dbpath = "mydb/";

    var example = {
        dbName: null,//数据库名字
        activeTable: null,//用到的表名
        dbTables: null,//所有的表名
        activeData: null,//用到的表的数据
        activeKeyList: null,//用到的字段列表
        activeKey: null,//用到的单个字段
        activeKeyValue: null,//用到的单个字段的值
    }

    /*
     * @des:JSON数据库操作对象
     * */
    var $JDB = function () {

    }

    /*
     * @des 针对整个数据库（DataBase）的操作
     * */

    /*
     * 创建数据库
     * */
    $JDB.prototype.createDB = function (param, callback) {

        param.dbName &&
        //!_FS.checkDictionaryName(dbpath + param.dbName) &&
        _FS.createDictionary(dbpath + param.dbName, function (data) {
            callback && callback(data);
        });


    }

    /*
     * 删除数据库
     * */
    $JDB.prototype.deleteDB = function (param, callback) {

        console.log("暂时不提供方法！");
    }


    /*
     * 修改数据库名字
     * */
    $JDB.prototype.updateDB = function (param, callback) {

        console.log("暂时不提供方法！");
    }

    /*
     * 查询数据库,返回数据库的所有表名
     * */
    $JDB.prototype.queryDB = function (param, callback) {


    }


    /*
     * @des 针对单个（表Table）JSON文件的操作
     * */

    /*
    *
    * @des:创建单个表
    * */
    $JDB.prototype.createTB = function (param, callback) {

        this.createDB(param, callback);

        param.activeTable &&
        //!_FS.checkFile(dbpath + param.dbName + '/' + param.activeTable) &&
        _FS.createFile(dbpath + param.dbName + '/' + param.activeTable, JSON.stringify(param.activeData),function (data) {
            callback&&callback(data);
        });


    }


    /*
     *
     * @des:查询表数据，返回字符串格式的数据
     * */
    $JDB.prototype.queryTB = function (param, callback) {

        param.charset = param.charset || "utf8";
        //!_FS.checkFile(dbpath + param.dbName + "/" + param.activeTable) &&
        _FS.readFile(dbpath + param.dbName + "/" + param.activeTable, param.charset, function (data) {

            callback && callback(data)
        });


    }


    /*
     * @des 针对单个字段（JSON文件中单个值）的操作
     * */

    /*
     * @des 添加字段
     * */
    $JDB.prototype.add = function (param, callback) {

    }

    /*
     * @des 删除字段
     * */
    $JDB.prototype.delete = function (param, callback) {

    }

    /*
     * @des 更新字段
     * */
    $JDB.prototype.update = function (param, callback) {

    }

    /*
     * @des 查询字段
     * */
    $JDB.prototype.query = function (param, callback) {
        console.log("查询字段")
    }

    module.exports = $JDB;
})
