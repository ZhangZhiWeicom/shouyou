//所有参数变量保存
var deviceWidth = device.getScreenWidth();
var deviceHeight = device.getScreenHeight();

var 任务Tab = {
    "x": function(){ return 1112 + random(-30, 30);},
    "y": function(){ return 148 + random(-10, 10);}
}

//蓝色山脉的力量
let storage = storages.create("newStone");
