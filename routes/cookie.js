import express from 'express'
const Router = express.Router()

Router.get('/explore', (req, res) => {
  res.cookie('name1', 'chloie')
  res.cookie('name2', 'bobbie', { signed: true })
  res.send('cookies sent')
})

Router.get('/verify', (req, res) => {
  console.log(req.cookies)
  console.log(req.signedCookies)
  res.send(req.signedCookies)
})

export default Router
