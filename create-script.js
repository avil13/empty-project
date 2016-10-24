var fs = require('fs');
var path = require('path');


// fs.writwriteFileSynceFile(filename, data);

var mkdirpSync = function(dirpath) {
    var parts = dirpath.split(path.sep),
        _path,
        stats;

    for (var i = 1; i <= parts.length; i++) {
        _path = path.join.apply(null, parts.slice(0, i));

        try{
            stats = fs.lstatSync(_path);
        }catch(e){
            stats = null;
        }

        if (stats && stats.isDirectory()) {
            continue;
        }
        fs.mkdirSync(_path);
    }
}

var make = function(path, file, data) {

};











var _src = {}; 