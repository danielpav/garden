var bodyParser = require('body-parser'),
  express = require('express');

module.exports = function(){
  var app = express();

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

  require('../routes.js')(app);

  app.use(express.static('./public'));

  return app;
};
