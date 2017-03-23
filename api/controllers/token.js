const bcrypt = require('bcrypt-as-promised');
const Users = require('../../models/users');
const cookieParser = require('cookie-parser');

const JWT = require('jsonwebtoken');

const cert = process.env.JWT;

let createUserToken = function (req, res, next) {
  console.log("im here");
  return Users.where('email', '=', req.body.email).fetch()
.then((userInfo) => {
  let user = JSON.parse(JSON.stringify(userInfo));
  return bcrypt.compare(req.body.password, user.hashed_password);
})
.catch((err) => {
  res.header('Content-Type', 'text/plain');
  res.status(400).send('Invalid email or password');
  next(err);
})
.then(() => Users.where('email', '=', req.body.email))
.fetch()
.then((userResult) => {
  let user = JSON.parse(JSON.stringify(userResult));
  const claims = {
    userId: user.id
  };
  const token = JWT.sign(claims, cert, {
    expiresIn: '2 hours'
  });
  res.cookie('token', token, { path: '/', httpOnly: true });
  res.send('successful operation');
});
};
