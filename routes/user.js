import { express, User } from '../imports.js'

const router = express.Router()

router.get('/register', (req, res) => {
  res.send('register user router')
})

router.get('/fakeUser', async (req, res) => {
  const user = new User({ email: 'naz@nextfeline.uk', username: 'nazs' })
  const newUser = await User.register(user, 'password')
  res.send(newUser)
})

export default router
