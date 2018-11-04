// const express = require('express');
var  express =  require('express')
const app = express();
const server = require('http').Server(app)
var multer = require("multer");
// 图片上传接口
//选择diskStorage存储

app.use(function(req, res, next){
    if(req.url.startsWith('/profile')){
        return next()
    }
})

// uploads文件夹必须存在
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})
var upload = multer({ storage: storage });
//file 必须与上传过来的form表单的名称一致
app.post('/profile', upload.array('file', 40), function(req, res, next) {
    console.log(req.files)
    res.send({
        msg:'hello'
    })
});

server.listen(9000,function(){
    console.log('Listening 9093')
})