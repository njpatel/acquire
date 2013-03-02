var path = require('path')
  , util = require('util');

var prefix = ".";
var map = {};

function findConfig() {
  var searchDirs = [];
  var root = path.normalize(path.join(__dirname, '../..')); // Hack

  searchDirs.push(root);
  for (var i = 0; i < searchDirs.length; ++i) {
    try {
      var p = searchDirs[i];
      var m = require(path.join(p, 'acquire.json'));
      prefix = p;
      map = m;
      break;
    } catch(err) {
      ;
    }
  }
}

module.exports = function(modName) {
  if (map[modName]) {
    return require(path.join(prefix, map[modName]));
  }
  else {
    var err = util.format('Module %s does not exist in map %s/acquire.json', modName, prefix);
    throw err;
  }
}

findConfig();
