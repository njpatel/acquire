var path = require('path')
  , assert = require('assert');
var acquire = require('../index');

function testResolveMappedModule() {
  global.mapFixture = function() { return 'mapped'; };
  var cfg = {
    fixture: path.join(__dirname, 'fixture.js')
  };
  var m = require('module');
  var origRequire = m.prototype.require;
  m.prototype.require = function(name) {
    if (name === path.join(process.cwd(), 'acquire.json')) {
      return cfg;
    }
    return origRequire.apply(this, arguments);
  };

  var original = {};
  for (var k in require.cache) {
    if (k.indexOf('index.js') > -1 && k.indexOf('acquire') > -1) {
      original[k] = require.cache[k];
      delete require.cache[k];
    }
  }
  var fresh = require('../index');
  var caught;
  try {
    fresh('fixture');
  } catch(err) {
    caught = err;
  }
  assert(caught, 'missing acquire.json should throw');

  m.prototype.require = origRequire;
}

function testMissingMappingThrows() {
  var caught;
  try {
    acquire('doesNotExist');
  } catch(err) {
    caught = err;
  }
  assert(caught, 'unmapped module should throw');
  assert(/doesNotExist/.test(caught), 'error should name missing module');
}

testResolveMappedModule();
testMissingMappingThrows();
console.log('all tests passed');
