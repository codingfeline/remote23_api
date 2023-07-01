import { catchAsync, User } from '../imports.js'

const helperFunc = {
  getUsers: async (r, res) => {
    await User.find().then(user => {
      res.json(user)
    })
  },
  postTest: (req, res) => {
    res.send(req.body)
  },

  getTest: res => {
    res.send('testing only')
  },

  getOne: async (req, res) => {
    await User.findById(req.params.userId)
      .then(user => res.json(user))
      .catch(err => res.send(err))
  },

  fakeUser: async (r, res) => {
    try {
      const user = new User({ email: 'naz@nextfeline.uk', username: 'nazs5a' })
      const newUser = await User.register(user, 'password')
      res.send(newUser)
    } catch (error) {
      res.send(error)
    }
  },

  register: catchAsync(async (req, res, next) => {
    try {
      const { email, username, password } = req.body
      const user = new User({ email, username })
      const registeredUser = await User.register(user, password)
      req.login(registeredUser, err => {
        if (err) return next(err)
        res.send(registeredUser)
      })
    } catch (e) {
      res.send(e.message)
    }
  }),
}

export default helperFunc
