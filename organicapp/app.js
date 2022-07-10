var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bcrypt = require("bcryptjs");
var loginRouter = require("./routes/login");
var indexRouter = require("./routes/index");
var adminRouter = require("./routes/admin");
var signupRouter = require("./routes/signup");
var rdb = require("./lib/rethink");
var app = express();
//Import the main Passport and Express-Session library
const passport = require("passport");
const session = require("express-session");
const { json } = require("express");
//Import the secondary "Strategy" library
const LocalStrategy = require("passport-local").Strategy;
// This is the basic express session({..}) initialization.
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);
// init passport on every route call.
app.use(passport.initialize());
// allow passport to use "express-session".
app.use(passport.session());
// The "authUser" is a function that we will define later will contain the steps to authenticate a user,
// and will return the "authenticated user".
authUser = (user, password, done) => {
  var localAuthRdb = new Promise((resolve, reject) => {
    resolve(
      rdb
        .authenticateuser("test", "appusers", "" + user + "")
        .then(function (info) {
          //console.log(info);
          if (!info || info == "") {
            var notFoundError = new Error("info not found");
            notFoundError.status = 404;
            //console.log(notFoundError);
            return done(null, false);
          } else {
            const pwd = JSON.parse(JSON.stringify(info))[0].id;
            console.log("DB PASSWORD: " + pwd);

            const uname = JSON.parse(JSON.stringify(info))[0].username;
            console.log("user password: " + password);

            var userHashed = bcrypt.compare(password, pwd).then((hash) => {
              console.log("T OR F:" + hash);
              if (hash) {
               
                let authenticated_user = { id: pwd, name: uname };
                console.log("ALL GOOD" + authenticated_user);
                return done(null, authenticated_user);
              } else if (!hash) {
                console.log("NO MATCH");
                return done(null, false);
              }
            });
          }
        })
    );
  });
};
passport.use(new LocalStrategy(authUser));
passport.serializeUser((user, done) => {
  console.log(`--------> Serialize User`);
  console.log(user);
  done(null, user.id);

  // Passport will pass the authenticated_user to serializeUser as "user"
  // This is the USER object from the done() in auth function
  // Now attach using done (null, user.id) tie this user to the req.session.passport.user = {id: user.id},
  // so that it is tied to the session object
});
passport.deserializeUser((id, done) => {
  console.log("---------> Deserialize Id");
  console.log(id);

  done(null, { name: "foo", id: id });

  // This is the id that is saved in req.session.passport.{ user: "id"} during the serialization
  // use the id to find the user in the DB and get the user object with user details
  // pass the USER object in the done() of the de-serializer
  // this USER object is attached to the "req.user", and can be used anywhere in the App.
});
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/login", loginRouter);
app.use("/", indexRouter);
app.use("/home", indexRouter);
app.use("/admin", adminRouter);
app.use("/signup", signupRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
module.exports = app;