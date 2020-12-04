// this is not referring to passport.js but the library
const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    // the "google" in the below is from the GoogleSrategy above
    // that has been defined internally in the library
    passport.authenticate("google", {
      // the scope below the scope of access we want to have on user's account
      // the "profile" and "email" from below are not randomly made, these are key
      // variables that google points to the data
      scope: ["profile", "email"],
    })
  );

  // we are not going to manually get the user details from google
  // the GoogleStrategy passport can handle this
  // passport can see the code is inside the url so it can see that user
  // is attemptting to turn that code into a profile
  // third arg will be executed once the passport.authenticate("google") is executed,
  // in such flow
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
