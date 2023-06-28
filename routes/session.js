import { express } from '../imports.js'

const router = express.Router()

router.get('/', (req, res) => {
  if (req.session.count) {
    req.session.count += 1
  } else {
    req.session.count = 1
  }
  res.send(
    `You have viewed this page ${req.session.count} times(s). -- ${JSON.stringify(
      req.session
    )}`
  )
})

export default router
