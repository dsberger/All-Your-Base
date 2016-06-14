var fs = require('fs');
var index = fs.readFileSync('./public/index.html');

module.exports = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
};
