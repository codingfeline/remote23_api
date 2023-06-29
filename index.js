// prettier-ignore
import { express, db, customerRoute,  userRoute,sessionRoute, session, cors, passport, passportUtil } from './imports.js'

const app = express()
const PORT = 4010

db()

app.use(cors())
app.use(express.json())
app.use(session({ secret: 'secretforsession', resave: false, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())
passportUtil()

app.use('/customer', customerRoute)
app.use('/user', userRoute)
app.use('/session', sessionRoute)

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(PORT, () => console.log('server running on port: ' + PORT))
