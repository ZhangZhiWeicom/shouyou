let extra = function(){}

//新年活动
extra.领取年兽 = function(times){
    if(!times) times = 5;
    func.findImageEx("领取年兽.png", 695,825,1202,1075, times, function(){
        滑块移动(1);
        sleep(500 + random(-100, 100));
    }, function(result){
        clickPoint(result.x + random(-30, 30) , result.y + random(-10, 10));
        sleep(1500);
    });
}