const express = require('express')
const app = express()
const port = 3000

const cors = require('cors');

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/abc', (req, res) => {
  setTimeout(() => {
    res.send('欢迎访问abc接口，你想要什么？')
  }, 3000);
})

app.listen(port, () => console.log(`Example app listening on port port!`))