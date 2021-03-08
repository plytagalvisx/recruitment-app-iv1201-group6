const express = require("express");
const db = require("../integration/sequelize");
const { registerUser } = require("./registerUser");
const { login } = require("./login");
const { setAuthorization } = require("./setAuthorization");
const { migrate } = require("./migrateData");

// Create router
const router = express.Router();

// Register a new user and check if not taken
router.post("/registerUser", (req, res) => {
  registerUser(
    req.body.firstname,
    req.body.lastname,
    req.body.email,
    req.body.password
  ).then((response) => {
    res.status(response.status).send(response.body);
  });
});

// Login as a existing user
router.post("/login", (req, res) => {
  login(req.body.email, req.body.password, req.session).then((response) => {
    res.status(response.status).send(response.body);
  });
});

// Change authorization level of user
router.post("/setAuthorization", (req, res) => {
  setAuthorization(req.body.authLevel, req.body.email).then((response) => {
    res.status(200).send(response);
  });
});

// When synchronizing the old database, migrate all its data to the new database
router.get("/migrateData", (req, res) => {
  migrate()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) =>
      res.status(400).send({
        message: error.message || "Something went wrong with migrating data.",
      })
    );
});

// ------- testing stuff -------
// get all todos
router.get("/all", (req, res) => {
  // // Retrieve all Todos from the database.
  /*db.Todo.findAll().then(todos => res.send(todos)).catch(err => {res.status(500).send({
        message: err.message || "Some error occurred while creating the Todo."
     });
  });*/

  db.users
    .findAll()
    .then((users) => res.status(200).send(users))
    .catch((error) =>
      res.status(400).send({
        message: error.message || "Something went wrong. Status 400",
      })
    );
});

router.get("/allUsers", (req, res) => {
  // // Retrieve all users from the database.
  db.users
    .findAll()
    .then((users) => res.send(users))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving all users.",
      });
    });
});

// get single todo by id
router.get("/find/:id", (req, res) => {
  db.Todo.findAll({
    where: {
      id: req.params.id,
    },
  }).then((todo) => res.send(todo));
});

// delete todo
router.delete("/delete/:id", (req, res) => {
  db.Todo.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.send("success"));
});

// post new todo
router.post("/new", (req, res) => {
  db.Todo.create({
    text: req.body.text,
  })
    .then((submitedTodo) => res.send(submitedTodo))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Todo.",
      });
    });
});

// update todo
router.put("/update", (req, res) => {
  db.Todo.update(
    {
      text: req.body.text,
    },
    {
      where: { id: req.body.id },
    }
  ).then(() => res.send("success"));
});

// show applications by user email (define a get method that would display applications made by a given user's email)
/*router.get("/showUserApplications", (req, res) => {
  db.users // db.applications ?
      .findOne({
        where: {
          email: data.email,
        },
      })
      .then((user) => {
        console.log(user);
      });
});*/

module.exports = router;
