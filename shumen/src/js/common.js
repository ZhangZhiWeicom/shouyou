//重复性功能代码全部归集到这里

let com = function(){}



com.对话2 = function(times1, times2){
    if(!times2) times2 = 30
    func.findImageEx("3.png", 362,772,514,864, times2, function(){
        滑块移动(1);
        sleep(500 + random(-100, 100));
    }, function(res){
        //关闭弹窗
//        logd("出现对话")
        sleep(1000)
    });
    对话("3.png", 362,772,514,864, times1);
}


