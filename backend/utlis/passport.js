import dotenv from "dotenv";
dotenv.config();
import googleoauth from "passport-google-oauth20";
import passport from "passport";
const GoogleStrategy = googleoauth.Strategy;

const handlePassport = async() => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.google_client_id,

        clientSecret: process.env.google_client_secret,
        callbackURL: "http://www.example.com/auth/google/callback",
      },
      function (accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
          return cb(err, user);
        });
      }
    )
  );

  passport.deserializeUser
};

export { handlePassport };
