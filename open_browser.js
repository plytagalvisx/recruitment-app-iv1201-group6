// Include the chrome driver
require("chromedriver");

// Include selenium webdriver
const { Builder, By, Key, util } = require("selenium-webdriver");
let driver = new Builder().forBrowser("chrome").build();

async function example() {
  let tabToOpen = driver.get("http://localhost:3000/login");

  tabToOpen
    .then(function () {
      // Timeout to wait if connection is slow
      let findTimeOutP = driver.manage().setTimeouts({
        implicit: 10000, // 10 seconds
      });
      return findTimeOutP;
    })
    .then(function () {
      // Step 2 - Finding the username input
      let promiseUsernameBox = driver.findElement(By.name("email"));
      return promiseUsernameBox;
    })
    .then(function (usernameBox) {
      // Step 3 - Entering the username
      let promiseFillUsername = usernameBox.sendKeys(
        "Tomtom@gmail.com",
        Key.RETURN
      );
      return promiseFillUsername;
    })
    .then(function () {
      console.log(
        "Username entered successfully in" +
          "'login demonstration' for Recruitment Application"
      );

      // Step 4 - Finding the password input
      let promisePasswordBox = driver.findElement(By.name("password"));
      return promisePasswordBox;
    })
    .then(function (passwordBox) {
      // Step 5 - Entering the password
      let promiseFillPassword = passwordBox.sendKeys("Tomas", Key.RETURN);
      return promiseFillPassword;
    })
    .then(function () {
      console.log(
        "Password entered successfully in" +
          " 'login demonstration' for Recruitment Application"
      );

      // Step 6 - Finding the Sign In button
      let promiseSignInBtn = driver.findElement(By.name("Login"));
      return promiseSignInBtn;
    })
    .then(function (signInBtn) {
      // Step 7 - Clicking the Sign In button
      let promiseClickSignIn = signInBtn.click();
      return promiseClickSignIn;
    })
    .then(function () {
      console.log("Successfully signed in Recruitment Application!");
    })
    .then(function () {
      // Step 8 - Finding the Logout nav link
      let promiseLogOutLink = driver.findElement(By.name("logoutBtn"));
      return promiseLogOutLink;
    })
    .then(function (logoutLink) {
      // Step 9 - Clicking the Logout nav link
      let promiseClickLogoutLink = logoutLink.click();
      return promiseClickLogoutLink;
    })
    .then(function () {
      console.log("Successfully clicked on the Logout link page!");
    })
    .then(function () {
      // Step 10 - Finding the Logout button
      let promiseLogoutBtn = driver.findElement(By.name("Logout"));
      return promiseLogoutBtn;
    })
    .then(function (logoutBtn) {
      // Step 11 - Clicking the Logout button
      let promiseClickLogout = logoutBtn.click();
      return promiseClickLogout;
    })
    .then(function () {
      console.log("Successfully logged out of the Recruitment Application!");
    })
    .catch(function (err) {
      console.log("Error ", err, " occurred!");
    });

  /*let textPromise = driver.findElement(By.className("hello")).getText();
  textPromise.then((text) => {
    console.log("THIS IS THE TEXT: ", text);
  });*/
}
example();

/*async function example2() {
  // Step 1 - Opening the geeksforgeeks sign in page
  let tabToOpen2 = await driver.get("http://localhost:3000/logout");

  tabToOpen2
    .then(function () {
      // Timeout to wait if connection is slow
      let findTimeOutP = driver.manage().setTimeouts({
        implicit: 10000, // 10 seconds
      });
      return findTimeOutP;
    })
    .then(function () {
      // Step 6 - Finding the Sign In button
      let promiseSignInBtn = driver.findElement(By.name("Logout"));
      return promiseSignInBtn;
    })
    .then(function (signInBtn) {
      // Step 7 - Clicking the Sign In button
      let promiseClickSignIn = signInBtn.click();
      return promiseClickSignIn;
    })
    .then(function () {
      console.log("Successfully logged out of the Recruitment Application!");
    })
    .catch(function (err) {
      console.log("Error ", err, " occurred!");
    });
}
example2();*/
