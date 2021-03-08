const db = require("./sequelize");
const db1 = db.Database1.models;
const db2 = db.Database2.models;

/**
 * @return {Promise} Promise to start sequelize returning the started service
 */
exports.dbInitDatabase1 = () => {
  return db.Database1.sync();
};

/**
 * @return {Promise} Promise to start sequelize returning the started service
 */
exports.dbInitDatabase2 = () => {
  return db.Database2.sync();
};

/**
 * @param  {string} email
 *
 * @return {Promise} Promise to find user, returning found user
 */
exports.findUserByEmail = (email) => {
  return db1.users.findOne({
    where: {
      email: email,
    },
  });
};

/**
 *
 * @return {Promise} Promise to find persons, returning found persons
 */
exports.findAllPersons = () => {
  return db2.Person.findAll({
    attributes: ["name", "surname", "email", "password"],
  });
};

/**
 * @param  {string} email
 * @param  {string} password
 *
 * @return {Promise} Promise to find user, returning found user
 */
exports.findUserByEmailAndPasswordDB1 = (email, password) => {
  return db1.users.findOne({
    where: {
      email: email,
      password: password,
    },
    attributes: ["email", "password"],
  });
};

/**
 * @param  {string} firstName
 * @param  {string} lastName
 * @param  {string} email
 * @param  {string} password
 *
 * @return {Promise} Promise to creating the user in the database, returns the changes made
 */
exports.createUser = (firstName, lastName, email, password) => {
  return db1.users.create({
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: password,
  });
};

exports.setAuthLevel = (user, level) => {
  return user.update({
    authorization: level,
  });
};
