'use strict';

// var app = require('express')();
//
// var http = require('http');
// var swaggerTools = require('swagger-tools');
// var jsyaml = require('js-yaml');
// var fs = require('fs');
// var serverPort = 10010;

// morgan configuration
// const morgan = require('morgan');
//
// switch (app.get('env')) {
//   case 'development':
//     app.use(morgan('dev'));
//     break;
//
//   case 'production':
//     app.use(morgan('short'));
//     break;
//
//   default:
// }


'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
// module.exports = app; // for testing

// morgan configuration
const morgan = require('morgan');

switch (app.get('env')) {
  case 'development':
    app.use(morgan('dev'));
    break;

  case 'production':
    app.use(morgan('short'));
    break;

  default:
}

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);
});
//   if (swaggerExpress.runner.swagger.paths['/hello']) {
//     console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
//   }
// });


module.exports = app;
