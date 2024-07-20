function main() {
    // 参数设置 = main.html
    // 使用说明 = intr.html
    // 其他 = other.html
//    ui.removeAllUIConfig();
    var flag = ui.getConfig("flag");
    if(flag == "done"){
    }else{//新的
        ui.saveConfig("flag", "done")
        ui.saveConfig("level", JSON.stringify({"check":true}))
        let gj = {
            "check":true,//是否选中
            "type": "free",//free 免費30分钟 一直挂always  等待升级结束 task
            "time": 30,//挂机时间
            "time2":50
        }
        ui.saveConfig("gj", JSON.stringify(gj));

        //抓宠
        let zc = {
            "check":true,//是否选中
            "type": "always",//free 免費30分钟 一直挂always 时间
            "time": 1,//挂机时间
            "time2": 50//挂机时间
        }
        ui.saveConfig("zc", JSON.stringify(zc));


        //精灵王试炼
        let jlw = {
            "check":true,//是否选中
            "type": "匹配",//组队 匹配 招募
            "floor": 1,//多少层   一直到失败也行
            "status":false//任务完成状态
        }
        ui.saveConfig("jlw", JSON.stringify(jlw));

        //百人道场
        let brdc =  {
            "check":true,//是否选中
            "type": "匹配",//组队 匹配 招募
            "floor": 1,//多少层   一直到失败也行
            "status":false//任务完成状态
        }
        ui.saveConfig("brdc", JSON.stringify(brdc));


    }










//    ui.registeH5Function("customFunction",function(data){
//       logd("h5 call-"+data);
//       logd(gj.time)
//      //返回给网页的数据
//      return new Date().toString()
//   })
   ui.layout("main", "main.html");
    ui.layout("参数设置", "main.html");
    ui.layout("使用说明", "intr.html");
    ui.layout("其他", "other.html");
}

main();