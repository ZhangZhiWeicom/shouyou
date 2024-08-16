/**
 * 活动天书
 */
let activity = {}

activity.findActivity = function(name){


}

//======================日常 单人任务===========================
/**
 * 炼魔阵  单人任务
 */
activity.炼魔阵 = function(){

    func.findImageEx("炼魔阵.png",284,168,1258,524, 3, function(result){
        clickPoint(result.x +100+ random(-50, 50), result.y);
        sleep(random(1500, 2500));
        var exsists = func.findImageEx("参加.png",922,560,1024,604, 2, function(result1){
            clickPoint(result1.x+ random(-30, 30), result1.y+ random(-10, 10));
            sleep(120*1000);
            func.findImageByColor("变强.png", 0,96,48,160, 60, function(){
                logd("回到游戏主界面");
            }, function(){
                sleep(1000);
            })
        }, function() {
            sleep(1000);
        })
        if(exsists === null){//占不到参加按钮，说明该活动已经做完
            func.findImageEx("弹窗叉2.png",992,96,1068,158, 3, function(result1){
                clickPoint(result1.x+ random(-5, 5), result1.y+ random(-5, 5));
                sleep(1500);
            }, function() {
                sleep(500);
            })

            func.findImageEx("弹窗叉3.png",1196,8,1262,82, 3, function(result1){
                clickPoint(result1.x+ random(-10, 10), result1.y+ random(-10, 10));
                sleep(2000);
            }, function() {
                sleep(500);
            })
        }
    }, function() {
        drag(774,530, 772,150, 3000);
        sleep(4000);
    })

}

/**
 * 仙门试炼  单人任务
 */
activity.仙门试炼 = function(){
    func.findImageEx("仙门试炼.png",284,168,1258,524, 3, function(result1){
        clickPoint(result1.x +100+ random(-50, 50), result1.y);
        sleep(random(1500, 2500));
        var exsists = func.findImageEx("参加.png",922,560,1024,604, 2, function(result){
            clickPoint(result.x+ random(-30, 30), result.y+ random(-10, 10));
            sleep(3*1000);
            func.findImageEx("挑战.png", 1018,600,1196,656, 5, function(result2){
                clickPoint(result2.x+ random(-20, 20), result2.y+ random(-10, 10));
                sleep(2000);
                // func.findImageEx("确定.png", 700,502,820,542, 5, function(result3){
                //     clickPoint(result3.x+ random(-20, 20), result3.y+ random(-10, 10));
                //
                // }, function() {
                //     sleep(500);
                // })
                var res1 = func.findImageEx("取消.png", 464,502,590,544, 5, function(result3){
                    clickPoint(result3.x+ random(-20, 20), result3.y+ random(-10, 10));
                    sleep(2000);
                }, function() {
                    sleep(500);
                })
                if(!res1){
                    sleep(20*1000);
                    for(var i = 0; i < 120; i++){
                        var res = func.ocr(1148,310,1188,334, 1);
                        logd("RES========="+JSON.stringify(res));
                        if(res && res.label === "手动"){
                            logd("1111111");
                            clickPoint(1164,322)
                            i = 10000;
                        }else{
                            logd("i========", i);
                            sleep(1000);
                        }
                    }
                }
            }, function(){
                sleep(1000);
            })
        }, function() {
            sleep(1000);
        })

        func.findImageEx("关闭弹窗1.png", 794,16,1266,240, 1, function(result){
            clickPoint(result.x  + random(-5, 5),result.y + random(-5, 5))
            sleep(800);
        }, function(idx){
            // logd("关闭弹窗");
        })

        func.findImageEx("弹窗叉2.png",992,96,1068,158, 3, function(result){
            clickPoint(result.x+ random(-5, 5), result.y+ random(-5, 5));
            sleep(1500);
        }, function() {
            sleep(500);
        })

        func.findImageEx("弹窗叉3.png",1196,8,1262,82, 3, function(result){
            clickPoint(result.x+ random(-10, 10), result.y+ random(-10, 10));
            sleep(2000);
        }, function() {
            sleep(500);
        })
    }, function() {
        drag(774,530, 772,150, 3000);
        sleep(4000);
    })
}


/**
 * 赛跑比赛 单人任务
 */
activity.赛跑比赛 = function(){
    func.findImageEx("赛跑比赛.png",284,168,1258,524, 3, function(result1){
        clickPoint(result1.x +100+ random(-50, 50), result1.y);
        sleep(random(1500, 2500));
        var exsists = func.findImageEx("参加.png",922,560,1024,604, 2, function(result){
            clickPoint(result.x+ random(-30, 30), result.y+ random(-10, 10));
            sleep(3*1000);
            //????????????????还没写完?????????????????????????????????????
            //????????????????还没写完?????????????????????????????????????
            //???????????????还没写完??????????????????????????????????????
            //???????????????还没写完??????????????????????????????????????
            //???????????????还没写完??????????????????????????????????????
            //???????????????还没写完??????????????????????????????????????







        }, function() {
            sleep(1000);
        })

        func.findImageEx("关闭弹窗1.png", 794,16,1266,240, 1, function(result){
            clickPoint(result.x  + random(-5, 5),result.y + random(-5, 5))
            sleep(800);
        }, function(idx){
            // logd("关闭弹窗");
        })


        func.findImageEx("弹窗叉2.png",992,96,1068,158, 3, function(result){
            clickPoint(result.x+ random(-5, 5), result.y+ random(-5, 5));
            sleep(1500);
        }, function() {
            sleep(500);
        })

        func.findImageEx("弹窗叉3.png",1196,8,1262,82, 3, function(result){
            clickPoint(result.x+ random(-10, 10), result.y+ random(-10, 10));
            sleep(2000);
        }, function() {
            sleep(500);
        })
    }, function() {
        drag(774,530, 772,150, 3000);
        sleep(4000);
    })

}

/**
 * 玄界之石 单人任务
 */
activity.玄界之石 = function(){
    logd("玄界之石");
    func.findImageEx("玄界之石.png",284,168,1258,524, 3, function(result1){
        clickPoint(result1.x +100+ random(-50, 50), result1.y);
        sleep(random(1500, 2500));
        var exsists = func.findImageEx("参加.png",922,560,1024,604, 2, function(result){
            clickPoint(result.x+ random(-30, 30), result.y+ random(-10, 10));
            sleep(20*1000);
            for(var i = 0; i < 120; i++){
                var res = func.ocr(1148,310,1188,334, 1);
                logd("RES========="+JSON.stringify(res));
                if(res && res.label === "手动"){
                    clickPoint(1214 + random(-60, 60),82 + random(-30, 30))
                    sleep(3000);
                    clickPoint(1118 + random(-20, 20),470 + random(-5, 5))
                    sleep(20*1000);
                    back();
                    sleep(2000);
                    clickPoint(1164,322)
                    i = 10000;
                    sleep(5*60*1000);
                }else{
                    logd("i========", i);
                    sleep(1000);
                }
            }







        }, function() {
            sleep(1000);
        })

        func.findImageEx("关闭弹窗1.png", 794,16,1266,240, 1, function(result){
            clickPoint(result.x  + random(-5, 5),result.y + random(-5, 5))
            sleep(800);
        }, function(idx){
            // logd("关闭弹窗");
        })


        func.findImageEx("弹窗叉2.png",992,96,1068,158, 3, function(result){
            clickPoint(result.x+ random(-5, 5), result.y+ random(-5, 5));
            sleep(1500);
        }, function() {
            sleep(500);
        })

        func.findImageEx("弹窗叉3.png",1196,8,1262,82, 3, function(result){
            clickPoint(result.x+ random(-10, 10), result.y+ random(-10, 10));
            sleep(2000);
        }, function() {
            sleep(500);
        })
    }, function() {
        drag(774,530, 772,150, 3000);
        sleep(4000);
    })

}

/**
 * 篝火晚会 单人任务  限时任务
 */
activity.篝火晚会 = function(){


}

/**
 * 蟠桃园 单人任务  限时任务
 */
activity.蟠桃园 = function(){

}

/**
 * 天降彩珠 单人任务  限时任务
 */
activity.天降彩珠 = function(){


}

//=======================日常 组队任务===========================

/**
 * 保护苦头陀
 */
activity.保护苦头陀 = function(){
    func.findImageEx("保护苦头陀.png", 288,172,1258,464, 1, function(result){
        logd("保护苦头陀");
        clickPoint(result.x+218+ random( -20, 20),  result.y+68);
        sleep(1000);
        findRoad()
    }, function(idx){
        // logd("保护苦头陀");

    })
}

/**
 * 护送李英琼
 */
activity.护送李英琼 = function(){

}

//===============竞技对战=================================
/**
 * 圣焰战场 单人
 */
activity.圣焰战场 = function(){

}

//===============多人副本=================================
/**
 * 普通副本 组队
 */
activity.普通副本 = function(){

}

/**
 * 英雄副本 组队
 */
activity.英雄副本 = function(){

}

