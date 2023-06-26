import express from 'express'
import Customer from '../models/Customer.js'

const router = express.Router()

router.get('/', async (req, res) => {
  await Customer.find()
    .then(cust => res.json(cust))
    .catch(err => res.send(err))
})

router.get('/:custId', async (req, res) => {
  return await Customer.findById(req.params.custId)
    .then(cust => res.json(cust))
    .catch(err => res.send(err))
})

export default router
