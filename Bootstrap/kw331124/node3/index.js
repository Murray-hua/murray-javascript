// 引入http模块 --系统模块，不需要下载
const { log } = require('console');
const http = require('http')

// 主机地址
const hostname = '127.0.0.1';

// 主机端口
const port = 3000;

const server = http.createServer((req, res) => {
    // req:request 前端请求
    // res:response 后端响应

    console.log(req.url)

    // res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    // res.end('欢迎学习node.js')

    // res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end('<h1>欢迎学习node.js</h1>');
});

server.listen(port, hostname, () => {
    console.log(`服务器已经启动了`);
});