'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();


var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;


  app.listen(port, () => {
    if (app.get('env') !== 'test') {
    console.log('Listening on port', port);
    }
  });
});


module.exports = app; // for testing
