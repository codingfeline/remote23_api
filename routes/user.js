import { express, User, passport, isLoggedIn, catchAsync } from '../imports.js'

const router = express.Router()

router.get('/register', (req, res) => {
  res.send('register user router')
})

router.get('/fakeUser', async (req, res) => {
  const user = new User({ email: 'naz@nextfeline.uk', username: 'nazs' })
  const newUser = await User.register(user, 'password')
  res.send(newUser)
})

router.post(
  '/register',
  catchAsync(async (req, res) => {
    try {
      const { email, username, password } = req.body
      const user = new User({ email, username })
      const registeredUser = await User.register(user, password)
      res.send(registeredUser)
    } catch (e) {
      res.send(e.message)
    }
  })
)

router.post(
  '/login',
  passport.authenticate('local', {
    failureFlash: false,
  }),
  (req, res) => {
    console.log(req.user.username)
    res.json({ result: 'ok' })
  }
)

router.post('/logout', (req, res, next) => {
  req.logout(err => {
    if (err) return next(err)
    res.send('loggedout')
  })
})

router.get('/secret', isLoggedIn, (req, res) => {
  res.send('this is a secret route')
})

export default router
