const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(
    new GitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_REDIRECT_URI
    }, async (accessToken, refreshToken, profile, done) => {
        console.log('accessToken: ', accessToken);
        console.log('refreshToken: ', refreshToken);
        console.log('username, profileUrl: ', profile.username, profile.profileUrl);

        return done(null, profile);
    })
);

module.exports = passport;