const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

//google OAuth
passport.use(
  new GoogleStrategy(
    {
      callbackURL: "http://localhost:8000/api/auth/callback",
      clientID:
        "577740416033-5o653e0h7poma6p0qnhdmptir1gneqo6.apps.googleusercontent.com",
      clientSecret: "SyXJ2i8qkHSttQWwf7pY5dyy"
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("accessToken", accessToken);
      console.log("refreshToken", refreshToken);
      console.log("profile", profile);
    }
  )
);
