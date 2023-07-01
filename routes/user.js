import { express, passport, isLoggedIn, helpers } from '../imports.js'

const router = express.Router()

router.get('/register', (req, res) => {
  res.send('register user router')
})

router.get('/secret', isLoggedIn, (req, res) => {
  res.send('you are viewing a secret route')
})

router.get('/', helpers.getUsers)
router.get('/test', helpers.getTest)

router.get('/fakeUser', helpers.fakeUser)
router.get('/:userId', helpers.getOne)

router.post('/register', helpers.register)

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

export default router

/* 
below error refers to the route /secret not placed above /:userId

message": "Cast to ObjectId failed for value \"secret\" (type string) at path \"_id\" for model \"user\""
*/
