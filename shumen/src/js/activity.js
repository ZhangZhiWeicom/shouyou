/**
 * 活动天书
 */
let activity = {}

//======================日常 单人任务===========================
/**
 * 炼魔阵  单人任务
 */
activity.炼魔阵 = function(){

}

/**
 * 仙门试炼  单人任务
 */
activity.仙门试炼 = function(){

}


/**
 * 赛跑比赛 单人任务
 */
activity.赛跑比赛 = function(){


}

/**
 * 玄界之石 单人任务
 */
activity.玄界之石 = function(){


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

