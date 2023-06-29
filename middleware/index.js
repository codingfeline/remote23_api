const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.send('you must be logged in to access')
  }
  next()
}

export default isLoggedIn
