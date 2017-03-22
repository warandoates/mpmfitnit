'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();


// const controllers = require('./api/controllers/routeSwitcher');



var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  // app.use(controllers);

  var port = process.env.PORT || 10010;


  app.listen(port, () => {
    if (app.get('env') !== 'test') {
    console.log('Listening on port', port);
    }
  });

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});


module.exports = app; // for testing
