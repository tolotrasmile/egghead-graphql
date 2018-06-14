import express from 'express'
import graphQL from 'express-graphql'
import schema from './schema'
import mongoose from 'mongoose'

const app = express()
mongoose.Promise = global.Promise

app.use('/api', graphQL({
  graphiql: true,
  schema
}))

app.listen(3000, () => {
  mongoose.connect('mongodb://localhost/egghead-graphql')
  console.log('Start listening at prot 3000')
})

app.get('/', (request, response) => {
  
  response.json({success: true, message: 'Hello World.'})
})
