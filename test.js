/**
 * 使用pageres生成网页截图
 * 
 */

// const Pageres = require('pageres');

// const pageres = new Pageres({delay: 2})
//     .src('m.xin.com', ['480x320', '1024x768', 'iphone 5s'], {crop: true})
//     .src('baidu.com', ['1280x1024', '1920x1080'])
//     .dest('./snapshot')
//     .run()
//     .then(() => console.log('done'));


/**
 * 
 * 使用webshot截图
 * 
 */
// var webshot = require('webshot'); 
  
// var options = { 
//  screenSize: { 
//   width: 375 
//  , height: 480 
//  } 
// , shotSize: { 
//   width: 375 
//  , height: 'all'
//  } 
// , userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)'
//   + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
// }; 
  
// webshot('m.xin.com', 'xin.png', options, function(err) { 
//  // screenshot now saved to flickr.jpeg 
// }); 