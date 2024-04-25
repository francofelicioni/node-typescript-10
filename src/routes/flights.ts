import express from 'express'
import * as flightServices from '../services/flightServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(flightServices.getFullFlights())
})

router.post('/', (_req, res) => {
  res.send('Save new data')
})

export default router
