const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json()); // Add this line to parse JSON requests

app.get('/', (req, res) => {
  res.send('hello')
})

app.post('/login', (req, res) => {
  const { id, password } = req.body;
  console.log(req.body)
  if (id === '23480' && password === 'kar12') { // Check if the provided credentials are correct
    res.send('success'); // Send the string 'success' as the response
  } else {
    res.status(401).send('Invalid credentials'); // Send a status 401 (Unauthorized) with an error message
  }
})

app.listen(3000, () => {
  console.log('connected')
})
