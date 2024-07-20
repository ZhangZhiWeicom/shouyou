//全局变量全部放在这里
let deviceW = device.getScreenWidth();
let deviceH = device.getScreenHeight();
//找图范围，简单统一，  左上， 右上， 左下， 右下， 中间
let area = {
    "first":[0, 0, deviceW/2, deviceH/2],
    "second":[deviceW/2, 0, deviceW, deviceH/2],
    "thrid":[0, deviceH/2, deviceW/2, deviceH],
    "forth":[deviceW/2, deviceH/2, deviceW, deviceH],
    "center":[parseInt(deviceW/4), parseInt(deviceH/4), parseInt(deviceW*3/4), parseInt(deviceH*3/4)],
    "all":[0, 0, deviceW, deviceH]
}


let action  = "111";//提示正在进行的任务动作
//一键起号到55级
let level = {};

