const {
  findAllPersons,
  findUserByEmailAndPasswordDB1,
  createUser,
} = require("../integration/dbHandler");

/**
 *  Transfer data from the old database version to the new database version
 */
exports.migrate = async () => {
  // Collect the existing persons from old database:
  const persons = await findAllPersons();

  let existingUsersArr = [];
  for (var i = 0; i < persons.length; i++) {
    // Collect parameter values from the old database:
    const firstname_db2 = persons[i].name;
    const lastname_db2 = persons[i].surname;
    const email_db2 = persons[i].email;
    const password_db2 = persons[i].password;

    // Collect the users in new database inserted from old database:
    existingUsersArr = await findUserByEmailAndPasswordDB1(
      email_db2,
      password_db2
    );

    // Check if these users exist, if not add one to the new database
    // else check if these users in new database are the same as in old database.
    if (!existingUsersArr) {
      console.log("This person doesn't exist!");
      await createUser(firstname_db2, lastname_db2, email_db2, password_db2);
    } else {
      // JSON Stringify and Parse existing users from new database:
      const existingUsersArrJSON = JSON.stringify(existingUsersArr, null, 4);
      const parsedExistingUsersArrJSON = JSON.parse(existingUsersArrJSON);

      // User parameter values from the new database:
      const email_db1 = parsedExistingUsersArrJSON.email;
      const password_db1 = parsedExistingUsersArrJSON.password;

      // Check if these users in new database are exactly the same as in old database.
      // Else add to new database.
      if (email_db1 == email_db2) {
        console.log("This person already exists!");
      } else {
        console.log("This person doesn't exist!");
        await createUser(firstname_db2, lastname_db2, email_db2, password_db2);
      }
    }
  }
};
