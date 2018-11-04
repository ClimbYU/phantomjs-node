/**
 * Created by Administrator on 2016/5/5.
 */
var urls=[
    "http://www.baidu.com/",
    "https://m.baidu.com/",
    "https://m.xin.com/",
    "https://m.douyu.com/",
    "http://www.dongqiudi.com/"
];
var count=0;
var max=urls.length;
var fetch = require('node-fetch')
var fs = require('fs')
const FormData = require('form-data')
var request = require('request')
if(urls.length!=0){
    capture(urls[0]);
}
//生成随机字符串作为图片名称;
function createRandomName(len){
    len = len || 32;
    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}
//开始执行截图命令;
function capture(url){
    var randomPicName='test'+createRandomName(Math.random()*8);
    var spawn=require('cross-spawn');
    var process=spawn('phantomjs',['capture.js',url,randomPicName,count,max]);
    process.stdout.setEncoding('utf8');

    process.stdout.on("data",function(data){
        var code=data.replace(/[\r\n]/g,"");
        if(code=='success'){
            var execFile=require('child_process').execFile;
            var filePath='./pictures/'+randomPicName+'.png';
            // var execProcess=execFile('node',['upload.js',filePath,randomPicName,count,JSON.stringify(urls)],{cwd:'./routes/'},
            //     function(err,stdout,stderr){
            //     console.log("execFileSTDOUT:", stdout);
            //     console.log("execFileSTDERR:", stderr);
            // });

            /**
             * 测试上传成功
             */
            // var filePath = './pictures/testAP.png'
            // 将图片转换为form表单的形式上传
            var file = fs.createReadStream(filePath)
            var form = new FormData()
            form.append('file', file)
            fetch('http://localhost:9000/profile',{ method: 'POST', body: form})
                .then(res => res.json())
                .then(json => console.log(json))

        }
    });
    process.stderr.on('data',function(data){
        console.log("stderr"+data);
    });
    process.on('close',function(code){
        if (code == 1) {
            console.log('child process异常结束。目标：' + url);
        }
    });
    process.on('exit',function(code){
        console.log('child process exited with code ' + code);
        count++;
        if(count!=urls.length){
            capture(urls[count]);
        }
    });
}