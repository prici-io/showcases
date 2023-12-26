import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(morgan('tiny') as any)
app.use(express.json())

// play zone: add the routes here


//

app.listen(3000, () => {
  console.log('App is listening')
})