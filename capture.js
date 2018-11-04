var page=require('webpage').create();//创建一个网页对象;
var system=require('system');
var address,fileName;
// page.viewportSize={width:1024,height:800};//设置窗口的大小为1024*800；
// page.clipRect={top:0,left:0,width:1024,height:800};//截取从{0,0}为起点的1024*800大小的图像;
// //禁止Javascript，允许图片载入;
// // 并将userAgent改为"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.31 (KHTML, like Gecko) PhantomJS/19.0";
// page.settings={
//     javascriptEnabled: false,
//     loadImages: true,
//     userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.31 (KHTML, like Gecko) PhantomJS/19.0'
// };

if (system.args.length === 1) {
    console.log('Try to pass some args when invoking this script!');
    phantom.exit(1);
}else{
    //获取指令传递的参数,参数是以数组的形式传递的;
    address=system.args[1];
    fileName=system.args[2];
    count=system.args[3];
    max=system.args[4];
    //打开一个网页；
    page.open(address,function(status){
        if(status==='success'){
            //成功后将页面存储为图片并放在指定的位置；
            page.render('./pictures/'+fileName+'.png');
            // 此处console.log会转化为标准输出
            console.log(status)
        }
        // page.close();//释放;
        //退出；
        phantom.exit();
    });
}