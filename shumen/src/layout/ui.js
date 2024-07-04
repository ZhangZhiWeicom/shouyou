function main() {
//    ui.removeAllUIConfig();
    var flag = ui.getConfig("flag");
    if(flag == "done"){
    }else{//新的
        // ui.saveConfig("flag", "done")
        // ui.saveConfig("level", JSON.stringify({"check":true}))
        // let gj = {
        //     "check":true,//是否选中
        //     "type": "free",//free 免費30分钟 一直挂always  等待升级结束 task
        //     "time": 30,//挂机时间
        //     "time2":50
        // }
        // ui.saveConfig("gj", JSON.stringify(gj));
    }
    ui.layout("main", "main.html");
    ui.layout("参数设置", "main.html");
    ui.layout("使用说明", "intr.html");
    ui.layout("其他", "other.html");
}

main();