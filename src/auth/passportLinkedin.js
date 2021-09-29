const passport = require("passport");
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;

const LINKEDIN_CALLBACK_URL = "http://localhost:5000/api/v1/auth/linkedin/callback";
const LINKEDIN_KEY = '86ptlxg74c5xlk';
const LINKEDIN_SECRET = 'TV06colODYWbNGsR';



passport.use(
    new LinkedInStrategy(
      {
        clientID: LINKEDIN_KEY,
        clientSecret: LINKEDIN_SECRET,
        callbackURL: LINKEDIN_CALLBACK_URL,
        scope: 'r_liteprofile',
        passReqToCallBack: true,
      }, 
     async (req, accessToken, refreshToken, profile, cb) => {
      const user = {id: profile.id, name: profile.displayName, photo: profile.photos[1].value};
      return cb(null, user);
    }
  )
);
  
  passport.serializeUser(function(user, cb) {
      cb(null, user);
  });
    
  passport.deserializeUser(function(user, cb) {
    cb(null, user);
  });