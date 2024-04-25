import express from 'express'
import flightsRouter from './routes/flights'

const app = express()
const PORT = 8080
app.use(express.json())
app.listen(PORT, () => console.log(`listening on port: ${PORT}`))

app.get('/ping', (_req, res) => {
  console.log('pinged!')
  res.send('Pong')
})

app.use('/api/flights', flightsRouter)
