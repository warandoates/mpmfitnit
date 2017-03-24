function updateUser(req, res) {
  console.log('hi im here');

  const id = req.swagger.params.id.value;
  console.log(id);

  if (id < 0 || Number.isNaN(id)) {
    return res.status(400).json({
        code: 400,
        message: "foo"
    })
  }

  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let email = req.body.email;
  let weight = req.body.weight;
  let user_intentions = req.body.user_intentions;

  let hash;

  if (req.body.password) {
        bcrypt.hash(req.body.password, 12)
          .then((hashed_password) => {
            hash = hashed_password;
          })
  }

  if (!first_name && !last_name && !email && !weight && !user_intentions && !password) {
      return res.sendStatus(400);
  }

  let updatedUser = {};
  if (first_name) {
    updatedUser.first_name = first_name;
  }
  if (last_name) {
    updatedUser.last_name = last_name;
  }
  if (email) {
    updatedUser.email = email;
  }
  if (weight) {
    updatedUser.weight = weight;
  }
  if (password) {
    updatedUser.hashed_password = hash;
  }
  if (user_intentions) {
    updatedUser.user_intentions = user_intentions;
  }

  return Users.where({id: id})
      .save(updatedUser, {patch: true})
      .then((user) => {
        console.log(user);
        let u = JSON.parse(JSON.stringify(user));
        console.log(u);
        delete u.hashed_password;
        res.setHeader('Content-Type', 'application/json');
        res.send(u);
      })
      .catch(function(err) {
              res.setHeader("Content-Type", "application/json")
              res.status(400).json({
                  code: 400,
                  message: "foo"
              });
      });
};
