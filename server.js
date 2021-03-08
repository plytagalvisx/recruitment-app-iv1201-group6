//const { dbInitDatabase1, dbInitDatabase2 } = require("./integration/dbHandler");
//const PORT1 = process.env.PORT || 3004;
//const PORT2 = process.env.PORT || 3002;

var session = require("express-session");
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "build")));

// Cookie
app.use(
  session({
    key: "user",
    secret: "somerandomstuffs",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000,
    },
  })
);
app.use((req, res, next) => {
  if (req.cookies && req.cookies.user && !req.session.user) {
    res.clearCookie("user");
  }
  next();
});

// Router makes it easier to group related request handlers.
// The apiRoutes object creates an API for message (todo) handling:
const apiRoutes = require("./routes/apiRoutes");
// adds the API to the application:
app.use("/api", apiRoutes);

/*dbInitDatabase1().then(() => {
  app.listen(PORT1, () => {
    console.log("listening on: http://localhost:" + PORT1);
  });
});

dbInitDatabase2().then(() => {
  app.listen(PORT2, () => {
    console.log("listening on: http://localhost:" + PORT2);
  });
});*/

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

module.exports = app;
