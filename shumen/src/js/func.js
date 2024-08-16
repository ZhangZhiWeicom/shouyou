//自定义包装的工具方法
var func = function(){};

func.ocr = function(x1, y1, x2, y2, times){
    if(!times) times = 1;
    let res = null;
    //Tesseract模块初始化参数
    let tessInitMap = {
        "type": "paddleOcrOnline",
        "ocrType":"ONNX_PPOCR_V3",
        "serverUrl":"192.168.1.2",
        "debug": false
    }
    // let tessInitMap = {
    //     "type": "paddleocr"
    // }
    let tsOcr = ocr.newOcr();
    let inited = tsOcr.initOcr(tessInitMap);
    if (!inited) {
        loge("error : " + tsOcr.getErrorMsg());
        return res;
    }else{
        for(var i = 0; i < times; i++){
            //读取一个bitmap
            let  bitmap = image.captureScreenBitmap("png",x1, y1, x2, y2, 99)
            if (!bitmap) {
                loge("读取图片失败");
                return res;
            }
            // 对图片进行识别
            let result = tsOcr.ocrBitmap(bitmap, 5 * 1000, {});
//            logd("ocr结果-result》 " + JSON.stringify(result));
            bitmap.recycle();
            if (!result) {
                // logw("未识别到结果");
                return res;
            }else if(result.length  >= 1){
                i = 100000;
                res = result[0];
                value = result
               // logd("文字 : " + value.label + " x: " + value.x + " y: " + value.y + " width: " + value.width + " height: " + value.height);
            }

        }
    }
    tsOcr.releaseAll();
    // logd("ocr结果-》 " + JSON.stringify(res));
    return res;

}

/**
*自动截屏找图
*image1 小图
* x1 起始x1点
* y1 起始y1点
* x2 结束x2点
* y2 结束y2点
*/
func.findImageEx = function(image1, x1, y1, x2, y2, times, successFunc, failFunc){
    if(!times) times = 1;
    var result = null;

    //从工程目录下res文件夹下读取sms.png文件
    let sms=readResAutoImage(image1);
    for (var i = 0; i < times; i++) {
        let  points = image.findImageEx(sms,x1,y1,x2,y2,0.7, 0.8, 1, 5);
        // logd("points", JSON.stringify(points));
        //这玩意是个数组
        if(points && points.length> 0){
            let x = parseInt((points[0].left + points[0].right)/2);
            let y =parseInt((points[0].top + points[0].bottom)/2);
            result = {"x":x, "y":y};
            if(successFunc && typeof successFunc == "function")successFunc(result);
            i = times + 1;
        }else{
            if(failFunc && typeof failFunc == "function")failFunc(i);
        }

    }
    //图片要回收
    image.recycle(sms)
    return result;
}


/**
 *自动截屏找图
 *image1 小图
 * x1 起始x1点
 * y1 起始y1点
 * x2 结束x2点
 * y2 结束y2点
 */
func.findImageEx2 = function(image1, x1, y1, x2, y2, times, successFunc, failFunc){
    if(!times) times = 1;
    var result = null;

    //从工程目录下res文件夹下读取sms.png文件
    for (var i = 0; i < times; i++) {
        let  points = image.findImageEx(image1,x1,y1,x2,y2,0.7, 0.8, 1, 5);
        //这玩意是个数组
        if(points && points.length> 0){
            let x = parseInt((points[0].left + points[0].right)/2);
            let y =parseInt((points[0].top + points[0].bottom)/2);
            result = {"x":x, "y":y};
            if(successFunc && typeof successFunc == "function")successFunc(result);
            i = times + 1;
        }else{
            if(failFunc && typeof failFunc == "function")failFunc(i);
        }

    }
    //图片要回收
    image.recycle(sms)
    return result;
}


//func.findImageExAndClick = function(image1, x1, y1,  times, failFunc, successFunc){
//    func.findImageEx(image1,  x1, y1, x2, y2, times, failFunc, function(result){
//                        clickPoint(result.x -11 , result.y - 20);
//                sleep(1500);
//            });
//    return result;
//}

/**
*图片模板匹配二值化
*image1 小图
* x1 起始x1点
* y1 起始y1点
* x2 结束x2点
* y2 结束y2点
*/
func.matchTemplateEx = function(image1, x1, y1, x2, y2, times, successFunc, failFunc){
    if(!times) times = 1;
    var result = null;
    //从工程目录下res文件夹下读取sms.png文件
    let sms=readResAutoImage(image1);
    let  rectp= new Rect();
    rectp.left=x1;
    rectp.top=y1;
    rectp.right=x2;
    rectp.bottom=y2;
    for (var i = 0; i < times; i++) {

        let points = image.matchTemplateEx( sms,0.7,0.8,rectp,-1,1,5);
        logd("points " + JSON.stringify(points));
        //这玩意是个数组
        if(points && points.length> 0){
//            let x = parseInt((points[0].left + points[0].right)/2);
//            let y = parseInt((points[0].top + points[0].bottom)/2);
            result = {"x":points[0].point.x, "y":points[0].point.y};
            if(successFunc && typeof successFunc == "function")successFunc(result);
            i = times + 1;
        }else{
            if(failFunc && typeof failFunc == "function")failFunc(i);
        }
    }
    //图片要回收
    image.recycle(sms)
    return result;
}

/**
*透明找图
*image1 小图
* x1 起始x1点
* y1 起始y1点
* x2 结束x2点
* y2 结束y2点
*/
func.findImageByColor = function(image1, x1, y1, x2, y2, times, successFunc, failFunc){
    if(!times) times = 1;
    var result = null;
    //从工程目录下res文件夹下读取sms.png文件
    let sms=readResAutoImage(image1);
    for (var i = 0; i < times; i++) {

        let aimage = image.captureFullScreen();
        if(aimage != null){
            let  points = image.findImageByColor(aimage,sms,x1,y1,x2,y2,0.7, 1);
//            logd("points " + JSON.stringify(points));
            //这玩意是个数组
            if(points && points.length> 0){
//                logd(JSON.stringify(points))
                result = {"x":points[0].x, "y":points[0].y};
                if(successFunc && typeof successFunc == "function")successFunc(result);
                i = times + 1;
            }else{
                if(failFunc && typeof failFunc == "function")failFunc(i);
            }
        }
        image.recycle(aimage)
    }
    image.recycle(sms)
    return result;
}

///**
//*判断图片是否存在，用来等待图片出现
//*image1 小图
//* x1 起始x1点
//* y1 起始y1点
//* x2 结束x2点
//* y2 结束y2点
//*/
//func.imageExists(image1, x1, y1, x2, y2, times, successFunc, failFunc){
//
//    func.findImageEx("3.png", 362,772,514,864, 100, function(){
//        滑块移动(1);
//    sleep(500 + random(-100, 100));
//    }, function(res){
//        //关闭弹窗
//        logd("出现对话")
//        sleep(1000)
//    });
//
//}


