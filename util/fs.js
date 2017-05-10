/**
 * Created by oospace on 2017/5/9.
 */
define(function (require, exports, module) {
    var fs = require("fs");

    var promise = require("promise");

    var colors =require("colors")
    var FS = function () {

    }

    FS.prototype.checkDictionaryName = function (dname, callback) {
        if (fs.existsSync(dname)) {
            console.log(' [' + dname + '] 经检查已存在\n'.red);
            return true;
        } else {
            console.log(' [' + dname + '] 经检查不存在\n'.green);
            return false;
        }
    }

    FS.prototype.createDictionary = function (dname, callback) {
        if (fs.existsSync(dname)) {
            console.log(' [' + dname + '] 已存在，不能重复创建\n'.red);
            return false;
        } else {
            fs.mkdirSync(dname);
            console.log(' [' + dname + '] 已成功创建\n'.green);
            return true;
        }
    }

    FS.prototype.checkFile = function (fname, callback) {
        if (fs.exists(fname)) {
            console.log(' [' + fname + '] 已存在\n'.yellow);
            return false;
        } else {
            return true;
        }
    }

    FS.prototype.readFile = function (filepath, charset, callback) {

        charset = charset || "utf8";

        fs.readFile(filepath, charset, function (error, data) {
            //if (error) throw error;
            console.log('[' + filepath + '] 已成功读取:  ---->   '.green + data + " \n");

            callback && callback(error || data);
        });


    }

    FS.prototype.createFile = function (fname, str, callback) {
        fs.exists(fname, function (exists) {

            if (exists) {
                console.log(' [' + fname + '] 已存在,不能重复创建\n'.red);
            } else {
                fs.writeFile(fname, str);
                console.log(' [' + fname + '] 已成功创建\n'.green);
            }

            callback && callback(!exists)

        })
    }


    /*var basePath = "web/";//文件路径
     var reCreate = true;//已有的文件是否重新创建，暂不支持， 可扩展




     for (var key in pageList) {
     console.log(key);
     var template = "{}";
     //创建文件
     fs.writeFile(basePath + key + ".html", template, function (err) {
     if (err) throw err;
     });
     }

     //读取文件
     fs.readFile("bb.txt", "utf8", function (error, data) {
     if (error) throw error;
     console.log(data);
     });
     //创建文件
     fs.writeFile("bb.txt", "哈哈哈", function (err) {
     if (err) throw err;
     });
     // 修改文件名称
     fs.rename('bb.txt', 'bigbear.txt', function (err) {
     console.log('rename success');
     });
     //删除文件
     fs.unlink('bb.txt', function () {
     console.log('success');
     });
     // 查看文件状态
     fs.stat('bb.txt', function (err, stat) {
     console.log(stat);
     });
     // 判断文件是否存在
     fs.exists('bb.txt', function (exists) {
     console.log(exists);
     });*/

    module.exports = FS;
})

