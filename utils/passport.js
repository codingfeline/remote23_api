import { passport, LocalStrategy, User } from '../imports.js'

const passportUtil = () => {
  passport.use(new LocalStrategy(User.authenticate()))
  passport.serializeUser(User.serializeUser())
  passport.deserializeUser(User.deserializeUser())
}

export default passportUtil
