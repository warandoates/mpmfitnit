const bcrypt = require('bcrypt-as-promised');
const Users = require('../../models/users');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();


const JWT = require('jsonwebtoken');

const cert = process.env.JWT_KEY;

module.exports.createUserToken = function (req, res, next) {
  console.log("im here");
  return Users.where('email', '=', req.swagger.params.credentials.value.email).fetch()
.then((userInfo) => {
  let user = JSON.parse(JSON.stringify(userInfo));
  return bcrypt.compare( req.swagger.params.credentials.value.password, user.hashed_password);
})
.catch((err) => {
  res.header('Content-Type', 'text/plain');
  res.status(400).send('Invalid email or password');
  next(err);
})
.then(() => Users.where('email', '=',  req.swagger.params.credentials.value.email))
.fetch()
.then((userResult) => {
  let user = JSON.parse(JSON.stringify(userResult));
  const claims = {
    userId: user.id
  };
  const token = JWT.sign(claims, cert, {
    expiresIn: '2 hours'
  });
  user.token = token;
  delete user.first_name;
  delete user.last_name;
  delete user.hashed_password;
  delete user.updated_at;
  delete user.created_at;
  // res.cookie('token', token, { path: '/', httpOnly: true });
  // res.send('successful operation');
});
};
