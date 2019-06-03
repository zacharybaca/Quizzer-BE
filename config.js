const providers = [
'google', 
]

exports.GOOGLE_CONFIG = {
  clientID: process.env.GOOGLE_KEY,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: 'https://localhost:8080/Google/callback',
  //googleURL
}