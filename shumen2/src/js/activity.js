let activity = function(){}

//保护苦头陀
act.保护苦头陀 = function(){
    func.findImageEx("保护苦头陀.png", 288,172,1258,464, 1, function(result){
        logd("保护苦头陀");
        clickPoint(result.x+218+ random( -20, 20),  result.y+68);
        sleep(1000);
        findRoad()
    }, function(idx){
        // logd("保护苦头陀");

    })



}