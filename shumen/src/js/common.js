//重复性功能代码全部归集到这里

let com = function(){}


com.创建队伍 = function(){

    func.findImageEx("创建队伍.png", 1014,566,1266,702, 1, function(result){
        logd("创建队伍");
        clickPoint(result.x+218+ random( -20, 20),  result.y+68);
        sleep(1000);
        findRoad()
    }, function(idx){
        // logd("保护苦头陀");

    })

}

com.进入活动 = function(){

    func.findImageEx("进入活动.png", 1014,566,1266,702, 1, function(result){
        logd("创建队伍");
        clickPoint(result.x+218+ random( -20, 20),  result.y+68);
        sleep(1000);
        findRoad()
    }, function(idx){
        // logd("保护苦头陀");

    })

}




