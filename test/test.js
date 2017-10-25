const fsPlus = require('../index');
const co = require('co');
co(function * () {
  const readMe = yield fsPlus.readFileP('../ReadMe.md');
  console.log('readMe==>\r\n', readMe);
})