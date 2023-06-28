import { express, User } from '../imports.js'
import catchAsync from '../utils/catchAsync.js'

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

export default router
