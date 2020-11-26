const express = require('express')
const app = express()
const port = 3000

// 引入cors跨域模块，解决跨域请求问题
const cors = require('cors')
app.use(cors())

// express自带了一个中间件body-parser，用来解析post请求的数据
//引入'body-parser'
const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }))


//解析json格式，比如axios发送格式
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('你好，欢迎！')
})



// 接收get请求
app.get('/ggg', (req, res) => {
    console.log(req.query);
    res.send('登录成功')
})



// 接收post请求
app.post('/ppp', (req, res) => {
    console.log(req.body);
    res.send('登录成功')
})


app.listen(port, () => console.log(`服务器已经启动了`))