const express = require('express')()

express.listen(3000, () => {
  console.log('Start listening at prot 3000')
})

express.get('/', (request, response) => {
  response.end(JSON.stringify({success: true, message: 'Hello World.'}))
})
